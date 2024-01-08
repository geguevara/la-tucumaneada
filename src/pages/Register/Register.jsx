import React from "react";
import { useLocation } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {
  FormRegister,
  LoginStyled,
  RegisterContainerStyled,
} from "./Register.styles";
import Submit from "../../components/UI/Submit/Submit";
import { createUser } from "../../axios/axios-user";
import { Formik } from "formik";
import { registerInitialValues } from "../../formik/initialValues";
import { registerValidationSchema } from "../../formik/validationSchema";
import { setCurrentUser } from "../../redux/user/userSlice";
import useRedirect from "../../hooks/useRedirect";
import LoginInput from "../../components/UI/InputLogin/LoginInput"
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  useRedirect("/");
  const navigate = useNavigate();

  return (
    <RegisterContainerStyled>
      <h2> Registrarse </h2>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, actions) => {
          const user = await createUser(
            values.name,
            values.surname,
            values.email,
            values.password
          );
          actions.resetForm();
          if (user) {
            dispatch(
              setCurrentUser({
                ...user.usuario,
                token: user.token,
              })
            );
          }
        }}
      >
        <FormRegister>
          <LoginInput name='name' type='text' placeholder='Nombre' />
          <LoginInput name='surname' type='text' placeholder='Apellido' />
          <LoginInput name='email' type='text' placeholder='Email' />
          <LoginInput name='password' type='password' placeholder='Password' />
          
          <Submit>Continuar</Submit>
  
          <LoginStyled to="/login">
            <p>Tenes una cuenta? Inicia sesión</p>
          </LoginStyled>
        </FormRegister>
      </Formik>
    </RegisterContainerStyled>
  );
};

export default Register;
