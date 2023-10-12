import { styled } from "styled-components";

export const SectionForm= styled.section`
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    max-width: 535px;
    border: 2px solid var(--green);
    border-radius: 10px;
    padding: 2rem;
    gap: 40px;
    background: #ebe9e080;
`
export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    width: 30rem;
    gap: 20px;
    & input{
        border-radius: 10px;
        border: 1px solid gray;
        padding: 5px;
    }
    & button{
        margin-top: 20px;
    }
    @media (max-width: 560px) {
        width: 20rem;
    }
    @media (max-width: 390px) {
        width: 15rem;
    }
`