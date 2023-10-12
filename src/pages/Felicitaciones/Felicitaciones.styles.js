import styled from 'styled-components';

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(70vh - 100px);
`;

export const Title= styled.h1`
  background: gray;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ContainerInfo = styled.div`
  text-align: center;

  & p {
    margin-bottom: 50px;
  }
`;

