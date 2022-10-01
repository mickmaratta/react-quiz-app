import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-color: #88849c;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 1.5rem;
        color: whitesmoke;
    }

    * {
        box-sizing: border-box;
        font-family: 'Press Start 2P', sans-serif;
        color: whitesmoke;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
    }

    .score {
        font-size: 1.5rem;
        padding-bottom:5px;
        margin: 0px;
    }

    h1 {
        text-align: center;

        line-height: 2.2rem
    }

    .start, .next {
        cursor: pointer;
        background: #b6292b;
        border: 2px solid #fff;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 20px;
        padding: 0 40px;
        transition: 0.2s ease;
    }

    .start:hover, .next:hover {
        transform: scale(1.05);
    }
`