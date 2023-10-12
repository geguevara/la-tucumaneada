import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { motion } from "framer-motion";
import { RotatingLines } from "react-loader-spinner";
import { ErrorMessageStyled, FormRegister, InputContainerStyled, LoginStyled, RegisterContainerStyled, RegisterInputStyled } from "./Register.styles";
import Button from '../../components/UI/Button/Button';

const Register = () => {
  
  const navigate = useNavigate();
  const auth = getAuth();
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  // Manejo de errores y mensajes
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");
  const [firebaseErr, setFirebaseErr] = useState("");

  // Loading
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // Validacion de Email

  const emailValidation = (email) => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // Funciones Handle
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setErrCPassword("");
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Ingresa tu nombre");
    }
    if (!email) {
      setErrEmail("Ingresa tu email");
      setFirebaseErr("");
    } else {
      if (!emailValidation(email)) {
        setErrEmail("Ingresa un email válido");
      }
    }
    if (!password) {
      setErrPassword("ingresa tu contraseña");
    } else {
      if (password.length < 6) {
        setErrPassword("la constraseña debe tener al menos 6 carácteres");
      }
    }
    if (!cPassword) {
      setErrCPassword("Confirma tu contraseña");
    } else {
      if (cPassword !== password) {
        setErrCPassword("Las contraseñas no conciden");
      }
    }
    if (
      clientName &&
      email &&
      emailValidation(email) &&
      password &&
      password.length >= 6 &&
      cPassword &&
      cPassword === password
    ) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: clientName,
          });
          // Signed in
          const user = userCredential.user;
          setLoading(false);
          setSuccessMsg("Te registraste con exito!");
          setTimeout(() => {
            navigate("/Login");
          }, 3000);
        })

        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/email-already-in-use")) {
            setFirebaseErr("El correo ya esta registrado.");
          }
        });
      // =========== Registro de Firebase ===============
      setClientName("");
      setEmail("");
      setPassword("");
      setCPassword("");
      setErrCPassword("");
      setFirebaseErr("");
    }
  };

  return (
      <RegisterContainerStyled>
        
            <h2 >
              Registrarse
            </h2>
           <FormRegister> 
              <InputContainerStyled >
                <RegisterInputStyled
                  onChange={handleName}
                  value={clientName}
                  placeholder="Ingrese su nombre"
                  type="text"
                />
                {errClientName && (
                  <ErrorMessageStyled> ! {errClientName} </ErrorMessageStyled>
                )}
              </InputContainerStyled>
             <InputContainerStyled>
             <RegisterInputStyled
                  onChange={handleEmail}
                  value={email}
                  type="email"
                  placeholder="Ingrese su email"
                />
                {errEmail && (
                  <ErrorMessageStyled>! {errEmail} </ErrorMessageStyled>
                )}
                {firebaseErr && (
                  <ErrorMessageStyled> !{firebaseErr} </ErrorMessageStyled>
                )}
             </InputContainerStyled>
                
              
              <InputContainerStyled>
                <RegisterInputStyled
                  onChange={handlePassword}
                  value={password}
                  type="password"
                />
                {errPassword && (
                  <ErrorMessageStyled> ! {errPassword} </ErrorMessageStyled>
                )}
              </InputContainerStyled>
              <InputContainerStyled>
                <RegisterInputStyled
                  onChange={handleCPassword}
                  value={cPassword}
                  type="password"
                />
                {errCPassword && (
                  <ErrorMessageStyled> ! {errCPassword} </ErrorMessageStyled>
                )}
              </InputContainerStyled>
              <Button
                onClick={handleRegistration}
              >
                Continuar
              </Button> 
            
              {loading && (
                <div>
                  <RotatingLines
                    strokeColor="brown"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="50"
                    visible={true}
                  />
                </div>
              )}
              {successMsg && (
                <div>
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {successMsg}
                  </motion.p>
                </div>
              )}
                <Link to="/login">
                  <LoginStyled>Tenes una cuenta? Inicia sesión
                    </LoginStyled> 
                </Link>
            
          </FormRegister>

      </RegisterContainerStyled>
  
  );
};

export default Register;
