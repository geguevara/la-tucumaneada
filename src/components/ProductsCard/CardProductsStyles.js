import {styled } from "styled-components";
import { motion } from "framer-motion";
export const ProductsSectionStyled= styled.section`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    padding: 1rem 0;
    @media (max-width: 1200px) {
        margin: 0 20px;
    }
`;

export const ProductContainerStyled= styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    width: 100%;
    justify-content: space-between;
    padding-top: 20px;
     
    @media(max-width: 800px){
        justify-content: space-around;
    }
  
`;

export const ProductCard= styled.div`
    width: 220px;
    height: 320px;
    text-align: center;
    position: relative;
    /* background-color: #6b6d625e; */
   /*  backdrop-filter: blur(15px); */
    gap: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid #84a59d70;
    &:hover{
         transform: scale(1.05) translateZ(0) ;
         box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    h3{
        color: #487876;
        letter-spacing: 1px;
    }
    span{
        color:gray;
    }
`;
export const ContainerImg = styled.div`
    width: 204px;
    height: 160px;
    padding-top: 2px;
    /* position: absolute;
    top: 0; */
    img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
`;
export const CardTextContainer= styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
    height: 140px;
    /* position: absolute;
    top: 160px;
    left: 0;
    right: 0;
    bottom: 0; */
`
export const BuyProdContainer= styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    gap: 10px;

`
export const ButtonCardStyled= styled(motion.button)`
    color: white;
    width: 120px;
    background: #a98467;
    border-radius: 10px;
    padding: 10px;
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    
`;
export const PriceProdStyled= styled.p`
    background: linear-gradient( to top, #7f6a49, #a98467);
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;
    font-weight: 600;
    font-size: 1.3em;
`
export const ButtonContainer =styled.div`
 display: flex;
 gap: 30px;

`

