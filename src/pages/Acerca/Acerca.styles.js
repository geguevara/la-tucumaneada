import { styled } from "styled-components";
import campeona from '../../assets/campeona.png'


export const AboutSection= styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 30px;
`;
export const AboutImgContainer= styled.div`
    background-image: url(${campeona});
    background-position: center;
    background-size:cover;
    background-repeat: no-repeat;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 4px solid var(--green);
    
`;
export const AboutText= styled.div`
    width: 80%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: center;
    line-height: 2rem;

`