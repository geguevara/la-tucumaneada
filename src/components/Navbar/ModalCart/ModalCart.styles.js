import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  top: 80px;
  right: 0;
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
  gap: 20px;
  width: 450px;
  height: 100vh;
  padding: 2rem;
  background-color: #84a59d;
  box-shadow: 0 0 30px 20px rgba(0, 0, 0, 0.3);
  @media (max-width: 500px){
    width: 100%;
    left: -7px;
  }
`;

export const CloseBtnContainer = styled.div`
  height: 32px;
  display: none;
`;

export const CloseBtn = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--btn-gradient);
  color: white;
  cursor: pointer;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 2rem 0;

  & h1 {
    margin-top: 0;
  }
  & button{
    border: none;
  }
`;

export const MainContainer = styled.div`
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  margin: 0 auto 20px;
  padding: 1rem;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

 /*  @media (max-height: 800px) {
    height: 235px;
  } */
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  width: 360px;
  height: 100px;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  padding-left: 110px ;
  position:relative;
  

  img {
    width: 100px;
    height: 100px;
    border-radius: 15px 0 0 15px;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    right: 0%;
  }
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 200px;
`;

export const CardTitle = styled.h3`
  font-weight: 500;
`;

export const TextStyled = styled.p`
  margin: 0;
  font-size: .9rem;
`;

export const PriceStyled = styled.span`
  font-size: 1.2rem;
   color: #666;
`;
export const PriceTotalStyled = styled(PriceStyled)`
  color: #494747;
`;

export const PriceContainerStyled = styled.div`
  margin-bottom: 60px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  & p {
    text-align: center;
    margin-bottom: 0;
  }
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const ButtonContainerStyled = styled(SubtotalStyled)`
  justify-content: center;
  margin: 20px 0;
`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
`;
