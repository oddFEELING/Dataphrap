/** 🌹oddFEELING */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { dataStore } from '../../../global/data.global';
import {
  OptionInput,
  Selector,
  TagWrapper,
} from '../../../styles/Options.component';
import loggerUtility from '../../../utilities/logger.utility';
import { barStore } from '../../../global/charts/bar,global';
import useBarSeries from '../../../logic/useBarSeries';

//=============================================>  RENDER
const BarOptions = () => {
  const { fields } = dataStore();
  const { name, x, y, setter } = barStore();

  useBarSeries();
  useEffect(() => {
    loggerUtility.info('The Bar options have changed!');
  }, [name, x, y]);

  return (
    <Container>
      <Title>Bar Chart Options</Title>

      <TagWrapper>
        <h3>x Axis: </h3>
        <Selector value={x} onChange={(e) => setter('x', e.target.value)}>
          <option>- x axis data -</option>
          {fields &&
            fields.map((field, index) => {
              return (
                <option key={index} value={field}>
                  {field}
                </option>
              );
            })}
        </Selector>
      </TagWrapper>

      <TagWrapper>
        <h3>Y Axis: </h3>
        <Selector value={y} onChange={(e) => setter('y', e.target.value)}>
          <option>- Y axis data -</option>
          {fields &&
            fields.map((field, index) => {
              return (
                <option key={index} value={field}>
                  {field}
                </option>
              );
            })}
        </Selector>
      </TagWrapper>

      <TagWrapper>
        <h3>Entry name: </h3>
        <OptionInput
          type='text'
          onChange={(e) => setter('name', e.target.value)}
          value={name}
        />
      </TagWrapper>
    </Container>
  );
};

export default BarOptions;

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
  background-color: ${({ theme }) => theme.colors.dk_1()};
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
