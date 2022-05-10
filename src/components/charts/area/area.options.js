/** 🌹oddFEELING */

import React from 'react';
import styled from 'styled-components';

//=============================================>  RENDER
const AreaOptions = () => {
  return (
    <Container>
      <Title>Area Chart Options</Title>
    </Container>
  );
};

export default AreaOptions;

//=============================================>  COMPONENT
const Container = styled.section`
  gap: 1.5vh;
  width: 50%;
  height: 90%;
  padding: 3vh 5vw;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.lt_2()};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  transition: ${({ theme }) => theme.transition()};
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ theme }) => theme.colors.warn()};
`;

const Title = styled.h3`
  font-weight: 600;
  align-self: center;
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-family: ${({ theme }) => theme.fonts.pri};
`;

const Help = styled.span`
  gap: 1vh;
  width: 90%;
  height: auto;
  display: flex;
  padding: 10px;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.pri};
`;
