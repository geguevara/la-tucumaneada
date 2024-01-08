import { styled } from "styled-components";
import { Form as FormikForm } from 'formik';

export const FormSection= styled.section`
    margin: 50px;
    display: flex;
    flex-direction: column;
    max-width: 535px;
    border: 2px solid var(--green);
    border-radius: 10px;
    padding: 2rem;
    gap: 40px;
    background: #ebe9e080;
`
export const FormLogin= styled(FormikForm)`
    display: flex;
    flex-direction: column;
    width: 30rem;
    gap: 30px;
    & a{
        color: gray;
        width: 100%;
        text-align: center;
    }
    
    & submit{
       background-color: #b76a27;
    }

    @media (max-width: 560px) {
        width: 20rem;
    }
    @media (max-width: 390px) {
        width: 15rem;
    }
`
export const LoginEmailStyled = styled.p`
  color: var(--green);
    &:hover {
    text-decoration: underline ;
    transition: all 0.25s ease-out;
  }
`;

