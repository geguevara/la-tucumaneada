import React from "react";
import {
  FormLogin,
  FormSection,
  LoginEmailStyled,
} from "./Login.styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";
import Submit from "../../components/UI/Submit/Submit";
import useRedirect from "../../hooks/useRedirect";
import { Formik } from "formik";

import LoginInput from "../../components/UI/InputLogin/LoginInput";
import { loginInitialValues } from "../../formik/initialValues";
import { loginValidationSchema } from "../../formik/validationSchema";
import { loginUser } from "../../axios/axios-user";

const Login = () => {
  const dispatch = useDispatch();
  useRedirect("/");

  return (
    <FormSection>
      <h3>Log in</h3>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          const user = await loginUser(values.email, values.password);
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
        <FormLogin>
          <LoginInput name="email" type="text" placeholder="Email" />
          <LoginInput name="password" type="password" placeholder="Password" />
          <Link to="/register">
            <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
          </Link>
          <Submit>Ingresar</Submit>
        </FormLogin>
      </Formik>
    </FormSection>
  );
};

export default Login;
