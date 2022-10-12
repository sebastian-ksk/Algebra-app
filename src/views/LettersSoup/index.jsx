import { Button } from "@mui/material";
import React, { useState } from "react";
import { Layout } from "../GeneralLayout/Layout";
import { ButtonLetterSoup } from "./componetns/Button";
import {
    dataToreviewWord,
    dataWords,
    DtaRandomLeters,
    lentdata,
} from "./componetns/constants";
import {
    ConLeterSoup,
    ConponSoup,
    ContainesWords,
    GeneralCont,
    WordsSty,
} from "./styles";
let indexStart = 0;
let WordSlect = "";
let lengWord = 0;
export const LettersSuop = () => {
    const [WordClick, setWordClick] = useState({ suma: 0, Ids: [], word: "" });
    const [WordSucces, setWordSucces] = useState([{ Ids: [], word: "" }]);
    const word = (item) => {
        switch (item) {
            case 1:
                indexStart = 1;
                WordSlect = dataWords[0].split("").reverse().join("");
                lengWord = dataWords[0].length - 1;
                break;
            case 35:
                indexStart = 35;
                WordSlect = dataWords[1];
                lengWord = dataWords[1].length - 1;
                break;
            case 10:
                indexStart = 10;
                WordSlect = dataWords[2].split("").reverse().join("");
                lengWord = dataWords[2].length - 1;
                break;
            case 66:
                indexStart = 66;
                WordSlect = dataWords[3];
                lengWord = dataWords[3].length - 1;
                break;
            case 145:
                indexStart = 145;
                WordSlect = dataWords[4].split("").reverse().join("");
                lengWord = dataWords[4].length - 1;
                break;
            case 180:
                indexStart = 180;
                WordSlect = dataWords[5];
                lengWord = dataWords[5].length - 1;
                break;
            case 230:
                indexStart = 230;
                WordSlect = dataWords[6];
                lengWord = dataWords[6].length - 1;
                break;
            case 117:
                indexStart = 117;
                WordSlect = dataWords[7].split("").reverse().join("");
                lengWord = dataWords[7].length - 1;
                break;
            case 72:
                indexStart = 72;
                WordSlect = dataWords[8].split("").reverse().join("");
                lengWord = dataWords[8].length - 1;
                break;
            case 208:
                indexStart = 208;
                WordSlect = dataWords[9];
                lengWord = dataWords[9].length - 1;
                break;
            default:
                break;
        }
    };
    const almacenateClick = ({ id, letter }) => {
        const state = WordClick.Ids.some((item) => item === id);
        if (state) return;
        setWordClick({
            Ids: [...WordClick.Ids, id],
            suma: WordClick.suma + id,
            word: WordClick.word + letter,
        });
        const isSUma = dataToreviewWord.some(
            (data) => data.suma === WordClick.suma + id
        );
        if (!isSUma) return;
        const objexExist = dataToreviewWord.find(
            (data) => data.suma === WordClick.suma + id
        );
        const IdsCilick = [...WordClick.Ids, id];
        const isIds = IdsCilick.some(
            (ids) => ids < objexExist.indif || ids > objexExist.indSup
        );
        if (isIds) return;
        setWordSucces([
            ...WordSucces,
            { Ids: IdsCilick, word: objexExist.word },
        ]);
        cleanWorsSelected();
    };
    const cleanWorsSelected = () => {
        setWordClick({ suma: 0, Ids: [], word: "" });
    };
    //enviar csv
    const enddExercice = () => {
        const wordsfound = WordSucces.filter((data) => data.word !== "");
        const words = wordsfound.map((dataw) => dataw.word);
        const numberWords = words.length;
        console.log({ wordsfound, words, numberWords });
    };
    return (
        <>
            <Layout title="Sopa de letras">
                <GeneralCont>
                    <ConLeterSoup>
                        <ConponSoup>
                            {lentdata.map((data, i) => {
                                word(i);
                                let letter = "a";
                                if (i <= lengWord + indexStart) {
                                    const index = i - indexStart;
                                    letter = WordSlect[index];
                                } else {
                                    console.log(Math.random());
                                    letter = DtaRandomLeters[parseInt(i)];
                                }
                                const isCLick = WordClick.Ids.some(
                                    (item) => item === i
                                );
                                const isCorrect = WordSucces.some((data) =>
                                    data.Ids.some((idd) => idd === i)
                                );
                                return (
                                    <ButtonLetterSoup
                                        disabled={isCorrect}
                                        state={isCorrect ? 2 : isCLick ? 1 : 0}
                                        letter={letter}
                                        onClick={(e) =>
                                            almacenateClick({
                                                id: i,
                                                letter: e,
                                            })
                                        }
                                    />
                                );
                            })}
                        </ConponSoup>
                        <ContainesWords>
                            <Button
                                // disabled={isAuthenticate}
                                onClick={cleanWorsSelected}
                                color="warning"
                                variant="contained"
                            >
                                Borrar Selección
                            </Button>
                            {dataWords.map((daW) => {
                                const isWord = WordSucces.some(
                                    (data) => data.word === daW
                                );
                                return (
                                    <WordsSty state={isWord}>- {daW}</WordsSty>
                                );
                            })}
                            <br />
                            <br />
                            <Button
                                // disabled={isAuthenticate}
                                onClick={enddExercice}
                                color="success"
                                variant="contained"
                            >
                                terminar ejercicio
                            </Button>
                        </ContainesWords>
                    </ConLeterSoup>
                </GeneralCont>
            </Layout>
        </>
    );
};
