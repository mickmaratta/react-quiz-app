import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';

// Components
import QuestionCard from './components/QuestionCard';
import EndScene from './components/EndScene';

//Types
import { QuestionState, Difficulty } from './API';

//Styles
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}
const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]> ([]);
  const [score, setScore] = useState(0);
  const [gameStart, setGameStart] = useState(true);
  const [gameOver, setGameOver] = useState(false);
 
  const startTrivia = async () => {
    setLoading(true);
    setGameStart(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };


  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //Users answer
      const answer = e.currentTarget.value;
      //Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      //Add score if answer is correct
      if (correct) setScore(prev => prev + 1);
      //Save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers(prev => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    //Move on to the next question if not the last question
    const nextQuestion = number + 1

    if (nextQuestion === (TOTAL_QUESTIONS)) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>VIDEO GAME QUIZ</h1>
      <p>Test your video game knowledge</p>
      {gameStart && (
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      )}
      {!gameStart && userAnswers.length !== TOTAL_QUESTIONS && <p className="score">Score: {score}</p>}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && !gameStart && userAnswers.length !== TOTAL_QUESTIONS && (
      <QuestionCard 
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
      )}
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <EndScene 
          startTrivia={startTrivia}
          score={score}
          totalQuestions={TOTAL_QUESTIONS}
        />
        ) : null }
      {!gameOver && !loading && !gameStart && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 &&( 
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
      )}
    </Wrapper>
    </>
  );
}

export default App;
