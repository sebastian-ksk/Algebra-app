import styled from "styled-components";

export const ConsCarrousell = styled.div`
    background-color: #fafafa;
    .list-dosts-styled {
        position: absolute;
        bottom: 0px;
        > .react-multi-carousel-dot--active {
            > button {
                background-color: white;
                width: 4.55vh;
                height: 0.5vh;
                border-radius: 0px;
                margin-bottom: 2vh;
            }
        }
        > li {
            margin-right: 12px;
            height: auto;
            width: auto;
            > button {
                width: 4.55vh;
                height: 0.5vh;
                border-radius: 0px;
                margin-bottom: 2vh;
                background-color: white;
                border: none;
            }
        }
        > li:last-child {
            margin-right: 0;
        }
    }
`;
