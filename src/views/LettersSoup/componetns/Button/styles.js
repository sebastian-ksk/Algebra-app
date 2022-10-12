import styled from "styled-components";

export const ButtonSoup = styled.button`
    height: 35px;
    width: 35px;
    border-color: black;
    border-width: 1px;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: ${({ state }) => (state === 0 ? "black" : "white")};
    background-color: ${({ state }) =>
        state === 1
            ? "rgba(41,57,244,0.8)"
            : state === 2
            ? " rgba(39,159,0,0.9)"
            : "white"};
    border-radius: 5px;
    margin: 3px;
`;
