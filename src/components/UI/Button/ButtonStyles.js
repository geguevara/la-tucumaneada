import {styled } from "styled-components";
import {motion} from "framer-motion";

export const StyledButton = styled(motion.button)`
    background: linear-gradient(to top,#a55e59, #a57d59);
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
        background:#b76a27;    
        box-shadow: #717171b3 0px 7px 29px 0px;   
    }
    &:disabled{
        cursor: not-allowed;
        opacity: 0.5;
    }
    .hidden{
    visibility: hidden;
    }
    @media(max-width: 450px){
        font-size: .8rem;
    }
`