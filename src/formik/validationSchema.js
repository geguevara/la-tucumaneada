import * as Yup from 'yup'

export const checkoutValidationSchema=Yup.object({
    name:Yup.string().required('Campo requerido'),
    cellphone:Yup.string().required('Campo requerido'),
    location: Yup.string().required('Campo requerido'),
    address: Yup.string().required('Campo requerido')
})

export const registerValidationSchema = Yup.object({
    name:Yup.string().required('Campo requerido'),
    email:Yup.string().required('Campo requerido').email('Correo electronico invalido'),
    password:Yup.string().required('Campo requerido').min(8, 'La contraseña debe tener al menos 8 caracteres'),
})
export const loginValidationSchema =Yup.object({
    email:Yup.string().required('Campo requerido').email('Correo electronico invalido'),
    password: Yup.string().required('Campo requerido')
})
export const forgotPasswordValidationSchema= Yup.object({
    email:Yup.string().required('Campo requerido').email('Correo electronico invalido'),
})