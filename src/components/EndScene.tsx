import React from 'react'
import { Wrapper } from './QuestionCard.styles'

type Props = {
    startTrivia: any,
    score: number,
    totalQuestions: number
}

const endingText = (score: number, questions: number) => {
    let endingText: string;
    if ((score/questions === 1)) {
      endingText = "Wow! Maybe it's time to go outside..."
    } else if ((score/questions) <= 0.4) {
      endingText = 'Do you even play video games?'
    } else if ((score/questions) <= 0.7) {
      endingText = 'Doing alright, try again!'
    } else {
      endingText = "You won a heart container!"
    }

    return endingText
}

const EndScene: React.FC<Props> = ({
    startTrivia,
    score,
    totalQuestions
}) => {
  return (
    <Wrapper>
        <h2>Game Over</h2>
        <p>You got {score} / {totalQuestions} correct</p>
        <p>{endingText(score, totalQuestions)}</p>
        <button onClick={startTrivia} className="start">Play Again</button>
    </Wrapper>
  )
}

export default EndScene;
