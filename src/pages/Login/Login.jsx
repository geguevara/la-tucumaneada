import React from 'react'
 import { FormLogin, FormSection, InputContainerStyled, LoginEmailStyled, LoginInputStyled } from './Login.styles'
import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { RotatingLines } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";
import Button from '../../components/UI/Button/Button';

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  // Manejo de errores Firebase
  const [userEmailErr, setUserEmailErr] = useState("");
  const [userPassErr, setUserPassErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      setErrEmail("Ingresa tu email");
    }
    if (!password) {
      setErrPassword("Ingresa tu contraseña");
    }
    if (email && password) {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(setCurrentUser({
            _id:user.uid,
            userName:user.displayName,
            email:user.email,
          }))
          // ...
          setLoading(false);
          setSuccessMsg("Te conectaste con exito!");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          if (error.code.includes("auth/invalid-email")) {
            setUserEmailErr("Email Inválido");
          }

          if (errorCode.includes("auth/wrong-password")) {
            setUserPassErr("Contraseña incorrecta");
          }
          console.log(
            "Intenta de nuevo con una credencial existente"
          );
        });
      setEmail("");
      setPassword("");
    }
  }
  return (
  
      <FormSection>
        <h3>Log in</h3>
        {
          successMsg ?(
            <p>{successMsg}</p>
          ):(
            <FormLogin>
                <InputContainerStyled>
                  
                  <LoginInputStyled
                    onChange={handleEmail}
                    value={email}
                    placeholder='Email'
                    type="email"
                  />
                  {errEmail && (
                    <p>! {errEmail} </p>
                  )}
                  {userEmailErr && (
                    <p >!{userEmailErr}</p>
                  )}
                </InputContainerStyled>
                <InputContainerStyled >
                 
                  <LoginInputStyled
                    onChange={handlePassword}
                    value={password}
                    placeholder='Password'
                    type="password"
                  />
                  {errPassword && (
                    <p>!{errPassword}</p>
                  )}
                  {userPassErr && (
                    <p > !{userPassErr}</p>
                  )}
                </InputContainerStyled>
                <Button onClick={handleLogin}>
                  Iniciar sesión
                </Button>
                {loading && (
                  <div className='Loader-div'>
                    <RotatingLines
                      strokeColor="green"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="50"
                      visible={true}
                    />
                  </div>
                )}
             
            <Link  to="/register">
               <LoginEmailStyled>¿No tenes cuenta? Registrate
                </LoginEmailStyled> 
            </Link>
          </FormLogin>
          )
        }
    </FormSection>
    
  )
}

export default Login