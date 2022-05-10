/** 🌹oddFEELING */

import styled from 'styled-components';
import { Icon } from '@iconify/react';

import React from 'react';

//=============================================>  RENDER
const ActionCard = ({ ...props }) => {
  const { text, icon, width, height, children, onClick } = props;
  return (
    <Container width={width} height={height} onClick={onClick}>
      <Icon icon={icon} color='grey' height='40' />
      <p>{text}</p>
      {children && children}
    </Container>
  );
};

export default ActionCard;

//=============================================>  COMPONENT
const Container = styled.div`
  gap: 5%;
  display: flex;
  cursor: pointer;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 0 solid ${({ theme }) => theme.colors.dk_2(80)};
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '150px'};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: ${({ theme }) => theme.transition()};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.md};
    border: thin solid ${({ theme }) => theme.colors.dk_2(60)};
    background-color: ${({ theme }) => theme.colors.lt_1()};
  }
`;
