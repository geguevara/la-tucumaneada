import styled from 'styled-components';

export const CardContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 85%;
  height: 113px;
  box-shadow: 0 0 7px 2px #c5b5b5;
  border-radius: 15px;
  position: relative;
  padding: .5rem;

  & img {
    width: 93px;
    height: 100px;
    border-radius: 16px;
    object-fit: cover;
    position: absolute;
    left: 6px;
    @media (max-width: 650px) {
    width: 70px;
    }
    @media (max-width: 409px) {
    display: none;
    }
  }
  @media (max-width: 920px) {
    font-size: .9rem;
  }
`;

export const CardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 107px;
  height: 113px;
  justify-content: center;
  @media (max-width: 650px) {
    padding-left: 75px;
    }
  @media (max-width: 409px) {
    padding-left: 5px;
    }
`;

export const ProductTitleStyled = styled.h3`
  margin-bottom: 2px;
  font-weight: 500;
`;

export const TextStyled = styled.span`
  color: gray;
`;

export const PriceStyled = styled.p`
  font-weight: 700;
  background-color: var(--green-dark);
`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;
