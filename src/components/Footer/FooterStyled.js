import { styled } from "styled-components";

export const FooterSectionStyled= styled.section`
    padding: 3rem 2rem .7rem 2rem;
    width: 100%;
    gap: 30px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    h3{
        font-size: .7em;
        font-weight: 400;
        color: gray;
    }
`;
export const FooterContainerStyled= styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    gap: 20px;
    align-items: center;
    span{
        width: 40%;
        border-radius: 10px;
        height: 2px;
        background-color: var(--green);
    }
    svg{
        font-size: 1.2rem;
        cursor: pointer;
    }
    svg:hover{
        color: var(--orange);
    }
`;
export const FooterContainerIcons= styled.div`
    display: flex;
    justify-items:center;
    align-items: center;
    gap: 20px;
`