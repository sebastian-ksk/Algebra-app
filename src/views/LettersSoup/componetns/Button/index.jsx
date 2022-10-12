import React from "react";
import { ButtonSoup } from "./styles";

export const ButtonLetterSoup = ({ letter, onClick, state, disabled }) => {
    return (
        <ButtonSoup
            onClick={() => onClick(letter)}
            state={state}
            disabled={disabled}
        >
            {letter?.toUpperCase() || "X"}
        </ButtonSoup>
    );
};
