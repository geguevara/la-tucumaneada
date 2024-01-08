import * as Yup from 'yup'
import {regEmail} from '.././utils/regEmail'



export const registerValidationSchema = Yup.object({
    name:Yup.string().required('Campo requerido'),
    surname:Yup.string().required('Campo requerido'),
    email:Yup.string().required('Campo requerido').matches(regEmail, 'correo electronico inválido'),
    password:Yup.string().required('Campo requerido').min(6, 'La contraseña debe tener al menos 6 caracteres'),
})
export const loginValidationSchema =Yup.object({
    email:Yup.string().required('Campo requerido').matches(regEmail,'Correo electronico invalido'),
    password: Yup.string().required('Campo requerido')
})

export const validateValidationSchema = Yup.object({
    code: Yup.string()
      .min(8, 'Mínimo de caracteres: 8')
      .max(8, 'Máximo de caracteres: 8')
      .required('Campo Requerido'),
  });
  
  export const issueValidationSchema = Yup.object({
    title: Yup.string().required('Campo Requerido'),
    desc: Yup.string().required('Campo Requerido'),
    priority: Yup.number().required('Campo Requerido'),
  });

export const checkoutValidationSchema=Yup.object({
    name:Yup.string().required('Campo requerido'),
    cellphone:Yup.string().required('Campo requerido'),
    location: Yup.string().required('Campo requerido'),
    address: Yup.string().required('Campo requerido')
})
export const forgotPasswordValidationSchema= Yup.object({
    email:Yup.string().required('Campo requerido').email('Correo electronico invalido'),
})