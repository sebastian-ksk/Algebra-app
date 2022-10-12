import React, { useState } from "react";
import { Layout } from "../GeneralLayout/Layout";
import { Carrousel } from "./components/carrousell";
import {
    ContButton,
    Contimg,
    ContTextArea,
    GeneralCont,
    Imagecar,
} from "./styles";
import im1 from "../../images/carrousel/1.jpeg";
import im2 from "../../images/carrousel/2.jpeg";
import im3 from "../../images/carrousel/3.jpeg";
import im4 from "../../images/carrousel/4.jpeg";
import { Button } from "@mui/material";
export const ImagesCarrousel = () => {
    const [descripcion, setdescripcion] = useState([
        { id: 10, description: "", title: "" },
    ]);
    const imagenes = [
        { img: im1, Id: 0, tittle: "Examen C" },
        { img: im2, Id: 1, tittle: "Clase algebra" },
        { img: im3, Id: 2, tittle: "niño pensando" },
        { img: im4, Id: 3, tittle: "Tarea" },
    ];
    const AlmacenIm = ({ data, info }) => {
        const isData = descripcion.some((datar) => datar.id === data.Id);
        if (isData) {
            const ischane = descripcion.find((datar) => datar.id === data.Id);
            ischane.description = info;
        } else {
            setdescripcion([
                ...descripcion,
                { description: info, id: data.Id, title: data.tittle },
            ]);
        }
    };
    //enviar csv
    const enddExercice = () => {
        const data = descripcion.filter((data) => data.title !== "");
        console.log({ data });
    };
    return (
        <Layout title={"Describe imagenes"}>
            <GeneralCont>
                {" "}
                <ContButton>
                    <Button
                        // disabled={isAuthenticate}
                        onClick={enddExercice}
                        color="success"
                        variant="contained"
                    >
                        terminar ejercicio
                    </Button>
                </ContButton>
                <Carrousel>
                    {imagenes.map((data) => {
                        return (
                            <>
                                <Contimg key={data.Id}>
                                    <Imagecar key={data.Id} src={data.img} />
                                    <ContTextArea
                                        placeholder="Describe la imagen"
                                        onChange={(e) =>
                                            AlmacenIm({
                                                data: data,
                                                info: e.target.value,
                                            })
                                        }
                                    />
                                </Contimg>
                            </>
                        );
                    })}
                </Carrousel>
                {/*   <textarea></textarea> */}
            </GeneralCont>
        </Layout>
    );
};
