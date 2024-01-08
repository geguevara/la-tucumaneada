import React from 'react'
import { FormStyled, SectionForm } from './Contacto.styles'
import Button from "../../components/UI/Button/Button"

const Contacto = () => {
  return (
    <SectionForm>
        <h3>Contacto</h3>
        <FormStyled>
            <input type='text' placeholder='Nombre' id='name' /* value={form.name} *//>
            <input type='text' placeholder='Apellido' id='lastname' /* value={form.lastname *//>
            <input type='text' placeholder='Email' id='email' /* value={form.email} *//>
            <input type='text' placeholder='Asunto' id='asunto' /* value={Form.asunto} *//>
            <Button >Enviar</Button>
        </FormStyled>
    </SectionForm>
  )
}

export default Contacto