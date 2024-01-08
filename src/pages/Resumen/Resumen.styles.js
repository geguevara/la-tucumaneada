import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ResumenContainerStyled = styled.div`
  padding: 2rem 7rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ResumenTitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  color: var(--green);
  cursor: pointer;
  svg {
    font-weight: 800;
    font-size: 2rem;
  }
`;

export const ProductsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex-wrap: wrap;
`;

export const HrStyled = styled.hr`
  margin: 3rem 0 2rem 0;
`;

export const ResumenContainerInfoStyled = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
`;

export const CostoProductoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CostoEnvioStyled = styled(CostoProductoStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CostoTotalStyled = styled(CostoProductoStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;