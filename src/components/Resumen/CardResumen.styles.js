import styled from 'styled-components';

export const ProductStyled = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1.5rem 1rem;
  width: 90%;
  max-width: 620px;
`;

export const ProductLeftStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  h3{
    color: var(--maiz);
    letter-spacing: 1px;
  }
  p{
    color: gray;
    font-size: .9rem;
    font-weight: 400;
   
  }
`;

export const PriceContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ProductPriceStyled = styled.span`
  font-weight: 800;
  font-size: 2rem;
  color: var(--green);
`;