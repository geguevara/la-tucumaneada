import { useNavigate } from "react-router-dom";
import {
  IdStyled,
  PedidoContainerStyled,
  PriceStyled,
  TextContainerStyled,
  TitleStyled,
} from "./CardMisOrdenes.styles";
import { formatDate } from "../../utils/formatDate";

import OrderStatus from '../UI/OrderStatus/OrderStatus'

export const CardMisOrdenes = ({createdAt, status, total, _id}) => {

  const navigate = useNavigate()

  return (
    <PedidoContainerStyled onClick={() => navigate(`/resumen/${_id}`)}>
      <TextContainerStyled>
        <TitleStyled>ID de la orden: #{_id.slice(0, 6)}</TitleStyled>
        <IdStyled>Fecha: {formatDate(createdAt)}</IdStyled>
        <PriceStyled>${total}</PriceStyled>
      </TextContainerStyled>
      <OrderStatus status={status} />
    </PedidoContainerStyled>
  );
};

