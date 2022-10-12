import React from "react";
import { Route, Routes } from "react-router-dom";
import { CrossWordView } from "../../views/CrossWordView/CrossWordView";
import { FinalView } from "../../views/FinalView/FinalView";
import { ImagesCarrousel } from "../../views/ImagesCarrousell";
import { LettersSuop } from "../../views/LettersSoup";
import { PageWelcome } from "../../views/PageWelcome/PageWelcome";

import { RegisterView } from "../../views/RegisterView";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={"/"} element={<PageWelcome />} />
            <Route path={"/register"} element={<RegisterView />} />
            <Route path={"/crucigrama"} element={<CrossWordView />} />
            <Route path={"/final"} element={<FinalView />} />
            <Route path={"/Letras"} element={<LettersSuop />} />
            <Route path={"/ImagesDesc"} element={<ImagesCarrousel />} />
        </Routes>
    );
};
