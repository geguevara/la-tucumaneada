import { useNavigate } from 'react-router-dom';
import Submit from '../../components/UI/Submit/Submit';
import { ContainerInfo, Text, Title } from './Felicitaciones.styles';

const Felicitaciones = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Text>
        <ContainerInfo>
          <Title>¡Felicitaciones!</Title>
          <p>Tu pedido fué realizado con éxito.</p>
        </ContainerInfo>
        <Submit onClick={setTimeout(() => {
            navigate("/");
          }, 2000)}></Submit>
      </Text>
     
    </div>
  );
};

export default Felicitaciones;
