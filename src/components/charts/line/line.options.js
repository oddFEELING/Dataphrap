/** 🌹oddFEELING */

import React from 'react';
import styled from 'styled-components';
import {
  OptionInput,
  Selector,
  TagWrapper,
} from '../../../styles/Options.component';
import { dataStore } from '../../../global/data.global';
import { lineStore } from '../../../global/charts/line.global';
import useLineSeries from '../../../logic/useLineSeries';

//=============================================>  RENDER
const LineOptions = () => {
  const { fields } = dataStore();
  const { setter, x, y, name } = lineStore();

  useLineSeries();

  return (
    <Container>
      <Title>Line Chart Options</Title>

      <TagWrapper>
        <h3>X axis: </h3>
        <Selector onChange={(e) => setter('x', e.target.value)} value={x}>
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
        <h3>Y axis: </h3>
        <Selector onChange={(e) => setter('y', e.target.value)} value={y}>
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
          value={name}
          onChange={(e) => setter('name', e.target.value)}
        />
      </TagWrapper>

      <Help>
        <h2>Help</h2>
        <p>‣ X axis hold the categories</p>
        <p>‣ Y axis hold values to be plotted</p>
        <p>‣ Name is the name of the series</p>
        <p>‣ pdate to add multiple series coming up!!</p>
      </Help>
    </Container>
  );
};

export default LineOptions;

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
  background-color: ${({ theme }) => theme.colors.error()};
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
