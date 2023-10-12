import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BtnSubmit = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: 1px solid white;
  border-radius: 15px;
  color: white;
  background-color: transparent;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`;