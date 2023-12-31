import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import LoginInput from '../../components/UI/InputLogin/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import { Form, ValidateContainerStyled } from './Validate.styles';
import { useDispatch, useSelector } from 'react-redux';
import { verifyUser } from '../../axios/axios-user';

import {  setVerified } from '../../redux/user/userSlice';
import { validateInitialValues } from '../../formik/initialValues';
import { validateValidationSchema } from '../../formik/validationSchema';

const Validate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    } else if (currentUser.verified) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return (
    <ValidateContainerStyled>
      <h1>Validar cuenta</h1>
      <Formik
        initialValues={validateInitialValues}
        validationSchema={validateValidationSchema}
        onSubmit={async values => {
          await verifyUser(currentUser.email, values.code);
          dispatch(setVerified());
          navigate('/');
        }}
      >
        <Form>
          <LoginInput name='code' type='code' placeholder='code' />
          <Submit>Confirmar</Submit>
        </Form>
      </Formik>
    </ValidateContainerStyled>
  );
};

export default Validate;