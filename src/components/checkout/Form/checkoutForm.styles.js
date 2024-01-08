import styled from 'styled-components'
import{Formik as FormikContainer, Form as FormikForm} from 'formik'

export const CheckoutContainerForm = styled.div`
display: flex;
flex-direction: column;
width: 40%;
@media (max-width: 820px) {
  width: 70%;
}
`
export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const Form = styled(FormikForm)`
  display: flex;
    margin-top: 40px;
    gap: 21px;
    /* flex-wrap: wrap; */
    flex-direction: column;
    width: 100%;
    & button{
      color: #a98467 ;
      border: 1px solid #a98467;
      margin: 10px;
      justify-content: center;
    }
`;
