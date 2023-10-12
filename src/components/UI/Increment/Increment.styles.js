import styled from 'styled-components';
import { motion } from 'framer-motion';

export const IncrementStyled = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background: ${({ bgColor }) => bgColor || 'transparent'};
  border-radius: 15px;
  border: none;
  font-size: 1rem;
  font-weight: 800;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;