import { styled } from "styled-components";

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
export const FormLogin= styled.form`
    display: flex;
    flex-direction: column;
    width: 30rem;
    gap: 30px;
    & a{
        color: gray;
        width: 100%;
        text-align: center;
    }
    
    & button{
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
export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInputStyled = styled.input`
  width: 100%;
  color: gray;
  background-color: white;
  border-radius: 15px;
  border: ${({ isError }) => (isError ? 'none' :'1px solid gray' )};
  outline: none;
  caret-color: gray;
  border-radius: 10px;
  padding: 5px;
  -webkit-text-fill-color: gray;
  :-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--green) inset;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
