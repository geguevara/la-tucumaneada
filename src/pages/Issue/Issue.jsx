import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import LoginInput from '../../components/UI/InputLogin/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import { Form, ValidateContainerStyled } from './Issue.styles';
import { useSelector } from 'react-redux';
import { verifyUser } from '../../axios/axios-user';

/* import { setCurrentUser, setVerified } from '../../redux/user/userSlice';
 */import { ADMIN } from '../../utils/constants';
import { createIssue } from '../../axios/axios-issue';
import { issueInitialValues } from '../../formik/initialValues';
import { issueValidationSchema } from '../../formik/validationSchema';


const Issue = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    } else if (currentUser.rol !== ADMIN) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return (
    <ValidateContainerStyled>
      <h1>Crear issue</h1>
      <Formik
        initialValues={issueInitialValues}
        validationSchema={issueValidationSchema}
        onSubmit={async values => {
          await createIssue(
            values.title,
            values.desc,
            values.priority,
            currentUser
          );
          navigate('/');
        }}
      >
        <Form>
          <LoginInput name='title' type='text' placeholder='Título' />
          <LoginInput
            name='desc'
            type='text'
            placeholder='Descripción'
          />
          <LoginInput name='priority' type='number' placeholder='Prioridad' />
          <Submit>Crear</Submit>
        </Form>
      </Formik>
    </ValidateContainerStyled>
  );
};

export default Issue;