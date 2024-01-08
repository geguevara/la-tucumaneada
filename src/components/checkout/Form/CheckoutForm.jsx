import React from 'react'
import { Formik, Form, CheckoutContainerForm } from './checkoutForm.styles'
import Submit from '../../UI/Submit/Submit'
import {checkoutInitialValues} from '../../../formik/initialValues'
import {checkoutValidationSchema} from '../../../formik/validationSchema'
import Input from '../../UI/Input/Input'

import { useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'
import { clearCart } from '../../../redux/cart/cartSlice'

const CheckoutForm = ({cartItems}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  return (
    <CheckoutContainerForm>
        <h2>Ingresá tus datos</h2>
        <Formik
            initialValues={checkoutInitialValues}
            validationSchema={checkoutValidationSchema} 
             onSubmit={ () => {
                dispatch(clearCart()) 
              }
            } 
        >
            {
                ({isSubmitting})=>(
                   <Form>
                    <Input
                        name='name'
                        htmlFom= 'nombre'
                        type= 'text'
                        id= 'nombre'
                        placeholder= 'escriba su nombre'
                    >Nombre
                    </Input>
                    <Input
                        name='cellphone'
                        htmlFom= 'celular'
                        type= 'text'
                        id= 'celular'
                        placeholder= 'escriba su telefono'
                    >Celular
                    </Input>
                    <Input
                    name='location'
                        htmlFom= 'direccion'
                        type= 'text'
                        id= 'direccion'
                        placeholder= 'escriba su dirección'
                    >Dirección
                    </Input>
                    <Input
                        name='address'
                        htmlFom= 'localidad'
                        type= 'text'
                        id= 'localidad'
                        placeholder= 'escriba su localidad'
                    >Localidad
                    </Input>
                    <Submit 
                    disabled={!cartItems.length || isSubmitting}
                    onClick={()=>{
                        navigate("/felicitaciones")
                       

                    }
                }
                    >
                        {isSubmitting 
                            ? <RotatingLines
                            strokeColor="green"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="50"
                            visible={true}
                          />
                            : 'Iniciar pedido'
                        }
                    </Submit>

            </Form> 
                )
            }
            
        </Formik>
    </CheckoutContainerForm>
  )
}

export default CheckoutForm