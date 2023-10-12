import { NavLink } from "react-router-dom";
import  styled  from "styled-components";

export const LoginNavbar= styled.div`
    display: flex;
    align-items:center;
    & a{
        display: flex;
        gap: 10px;
    }
    svg{
        font-size: 1.2rem;
       
    }
    & button{
        margin: 0;
    }
`