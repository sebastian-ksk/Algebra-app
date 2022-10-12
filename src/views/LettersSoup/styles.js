import styled from "styled-components";

export const ConponSoup = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto;
    padding: 10px;
    width: 700px;
    height: 700px;
`;
export const ConLeterSoup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
export const ContainesWords = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-top: 12px;
`;
export const GeneralCont = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 90px;
`;
export const WordsSty = styled.p`
    font-size: 14;
    margin: 5px auto;
    text-align: left;
    color: ${({ state }) => (state ? " rgba(39,159,0,1)" : "black")};
`;
