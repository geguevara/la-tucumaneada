import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
  width: 40%;
  @media (max-width: 1100px) {
    width: 52%;
  }
  @media (max-width: 820px) {
    width: 70%;
  }
  @media (max-width: 650px) {
  width: 90%;
}
`;

export const ProductsTitleStyled = styled.h2`
  font-weight: 500;
  font-size: 22px;
  padding-bottom: 16px ;
`;

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 100%;
  height: 440px;
  margin: 0 auto;
  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--green);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 270px;
    padding: 10px;
  }

  @media (max-width: 1500px) {
    width: 100%;
  }
`;

export const PriceContainerStyled = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const PriceTotalStyled = styled.span`
  color: #ff7a00;
  font-weight: 800;
  font-size: 1.3rem;
`;

export const HrStyled = styled.hr`
  margin: 1rem 0;
`;
