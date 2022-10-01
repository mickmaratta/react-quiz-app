import styled from "styled-components";
import { mobile } from "../responsive";

export const Wrapper = styled.div`
    width: 60vw;
    background: black;
    border-radius: 10px;
    border: 2px solid #fff;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(255, 255, 255 , 0.15);
    text-align: center;
    margin-top: 20px;
    color: white;
    ${mobile({ width: "95%" })}

    p {
        font-size: 1rem;
        color: white;
    }
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        min-height: 70px;
        min-width: 70%;
        margin: 5px 0;
        background: ${({ correct, userClicked}) =>
            correct
                ? '#59bc86'
                : !correct && userClicked
                ? '#b6292b'
                : '#0079ad'};
        border: 3px solid #fff;
        box-shadow: 1px 2 px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: #fff;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25)
    }
`