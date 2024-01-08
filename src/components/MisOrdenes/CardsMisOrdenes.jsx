import { useSelector } from 'react-redux';
import { MisOrdenesContainerStyled } from './CardMisOrdenes.styles';
import {CardMisOrdenes} from './CardMisOrdenes'
import { RotatingLines } from 'react-loader-spinner';


export const CardsMisOrdenes = () => {

  const {orders, loading, error} = useSelector(state => state.orders)
 

  if (loading && !orders) {
    return <RotatingLines
    strokeColor="green"
    strokeWidth="5"
    animationDuration="0.75"
    width="50"
    visible={true}
  /> 
  }

  if(error) {
    return <h2 style={{ textAlign: 'center' }}>{error}</h2>;
  }

  return (
    <MisOrdenesContainerStyled>
      {
        orders?.length ? (
          orders.map((order) => {
            return <CardMisOrdenes key={order._id} {...order} />
          })
        ) : (
          <h2>Que esperas para hacer tu primer pedido!!</h2>
        )
      }
      
    </MisOrdenesContainerStyled>
  );
};
