import React from "react";
import { Layout } from "../GeneralLayout/Layout";
import { Carrousel } from "./components/carrousell";
import { Contimg, GeneralCont, GeneralContCarr, Imagecar } from "./styles";
import im1 from "../../images/carrousel/1.jpeg";
import im2 from "../../images/carrousel/2.jpeg";
import im3 from "../../images/carrousel/3.jpeg";
import im4 from "../../images/carrousel/4.jpeg";
export const ImagesCarrousel = () => {
    const imagenes = [
        { img: im1, Id: 0 },
        { img: im2, Id: 1 },
        { img: im3, Id: 2 },
        { img: im4, Id: 3 },
    ];
    return (
        <>
            <GeneralCont>
                <Carrousel>
                    {imagenes.map((data) => {
                        return (
                            <Contimg key={data.Id}>
                                <Imagecar key={data.Id} src={data.img} />
                            </Contimg>
                        );
                    })}
                </Carrousel>
                {/*   <textarea></textarea> */}
            </GeneralCont>
        </>
    );
};
