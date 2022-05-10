/** 🌹oddFEELING */

import React from 'react';
import styled from 'styled-components';

//=============================================>  RENDER
/**
 * A component to show step indicators
 *
 * @param {Number} step - current step in the process
 * @param {String} details- phrasal description of the step
 * @returns {Component} indicator component
 */
const IndicatorComponent = ({ step, details }) => {
  return (
    <Container>
      <Title>Step: {step}</Title>
      <Desc>{details}</Desc>
    </Container>
  );
};

export default React.memo(IndicatorComponent);

//=============================================>  COMPONENT
const Container = styled.div`
  gap: 2%;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: ${({ theme }) => theme.fonts.size.lg};
`;

export const Desc = styled.h3`
  font-weight: 600;
  padding: 5px 15px;
  box-shadow: ${({ theme }) => theme.shadow.md};
  font-size: ${({ theme }) => theme.fonts.size.md};
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ theme }) => theme.colors.info()};
`;
