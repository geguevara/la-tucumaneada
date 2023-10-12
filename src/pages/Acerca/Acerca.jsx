import React from 'react'
import { AboutImgContainer, AboutSection, AboutText } from './Acerca.styles'
/* import campeona from "../../assets/campeona.png" */

const Acerca = () => {
  return (
    <AboutSection>
        <AboutImgContainer/>
        <AboutText>
            <h3>Nuestra historia</h3>
            <p>
                Nos inspiramos en el amor por la provincia de Tucuman, con sus magetuosos paisajes y su calidez humana, son algo
                que uno cuando tiene la oportunidad de conocerlos, decide no olvidarlos. </p>
                <p>Pero los mejores recuerdos siempre apelan a los sentidos, el mejor de ellos sin duda es el gusto.
                Y aqui, es donde esta hermosa provincia no falla. Sus platos tipicos, tienen un sabor unico, nos llevan a un momento en particular.
                Sus fiestas tradicionales, sus musica folklorica, todo esta conectado con sus maravillosos platos.
                Asi es como lo sentimos nosotros, aun no siendo tucumanos de sangre, nuestro corazón se enloquece por el Jardín de la República. Pues somos amantes de los buenos recuerdos, amantes de las buenas comidas.
            </p>
        </AboutText>
    </AboutSection>
  )
}

export default Acerca