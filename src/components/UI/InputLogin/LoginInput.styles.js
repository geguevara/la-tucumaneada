import styled from 'styled-components';

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
    ::placeholder {
        opacity: 80%;
    }
  }
`;

export const ErrorMessageStyled = styled.p`
   padding: 8px;
  margin-top: 7px;
  color: white;
  font-size: 14px;
  background-color: #6c2d2d;
  width: fit-content;
  border-radius: 7px;
`;