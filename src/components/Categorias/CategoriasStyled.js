import styled from "styled-components";
import {motion} from "framer-motion";

export const  CategoriesSectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    padding-top: 1rem;
    h2{
        letter-spacing: 2px;
        text-align: center;
    }
    @media (max-width: 980px) {
        padding-top: 2rem;
    }
    @media (max-width: 630px) {
        padding-top: 5rem;
    }
`;
export const CategoriesContainerStyled= styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
    padding: 2rem;
`;
export const CardCategory =styled(motion.button)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: none;
    background-color: white ;
   /*  background-color:  ${({ selected }) =>
    selected ? 'gray' : 'white'};; */
    color: #a48450;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: 0 0 4px 3px #4a74253d;
    font-size: 1em;
    padding: .8em;
   /*  background: linear-gradient(to top, #a48450, #9e683d);
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;
 */
    &:hover{
         transform: scale(1.05) translateZ(0) ;
         box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`