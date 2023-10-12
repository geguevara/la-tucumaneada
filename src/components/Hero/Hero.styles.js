import styled from "styled-components"
import { Link } from "react-router-dom";

export const HeroContainerStyled = styled.section`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 50px;
    position: relative;
    
    @media (max-width:1100px) {
        padding: 0 20px;
        
    }
    @media (max-width: 980px) {
        justify-content: center;
        width: 100%;
        padding: 0;
        /* padding: 5rem 0; */
       height: auto;
        position: relative;
    }
`;
export const HeroTextStyled= styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
    h1{
        font-size: 3rem;
        letter-spacing: 1px;
    }
    p{
        font-size: 2rem;
    }
    @media (max-width: 980px) {
        align-items: center;
        text-align: center;
        justify-content: center;
        background: #51525422;
        backdrop-filter: blur(4px);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        color: white;
    }
    @media (max-width: 450px){
        padding: 10px;
        gap: 10px;
        h1{
            font-size: 1.8rem;
        }
        p{
            font-size: 1.3rem;
        }
        @media (max-width: 290px){
            p{
                display: none;
            }
            
        }
    }
`
export const HeroImgStyed= styled.div`
    width: 40%;
    img{
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 0 7px  3px #6c878f;
    }
    @media (max-width: 980px) {
        width: 100%;
        img{
            border-radius: 0;
            box-shadow: none;
        }
    }

`
export const LinkProdStyled= styled(Link)`
    background: linear-gradient(to top,#8dd3ab, #5d9e80);
    padding: 10px 15px;
    border: none;
    border-radius: 25px;
    text-transform: uppercase;
    color: white;
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;

    &:hover{  
        box-shadow: 0 0 15px 2px #acc3bb;
    }
`