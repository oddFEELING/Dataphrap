/** 🌹oddFEELING */

import React from 'react';
import NavLayout from '../layout/nav.layout';
import {
  Container,
  OptionInput,
  OptionWrapper,
  Selector,
  TagWrapper,
} from '../styles/Options.component';
import Script from 'next/script';
import { dataStore } from '../global/data.global';
import TagComponent from '../components/Tag.component';
import { optionStore } from '../global/options/options.global';
import ButtonComponent from '../components/Button.component';
import IndicatorComponent from '../components/Indicator.component';

const Options = () => {
  const { fields, data: Data } = dataStore((state) => state);
  const { setType, options } = optionStore();

  return (
    <Container>
      <IndicatorComponent step={2} details='Set Options' />
      <OptionWrapper>
        <TagWrapper>
          <h3>Headers: </h3>
          {fields &&
            fields.map((field, index) => {
              return <TagComponent tag={field} key={index} />;
            })}
        </TagWrapper>
        <h3>Set Chart type: </h3>
        <Selector onChange={(e) => setType(e.target.value)}>
          <option>- Select type -</option>
          <option value='line'>Line</option>
          <option value='bar'>Bar</option>
          <option value='column'>Column</option>
          <option value='pie'>Pie</option>
          <option value='area'>Area</option>
        </Selector>

        {/* ====== Chart title  */}
        <TagWrapper>
          <h3>Chart Title: </h3>
          <OptionInput type='text' />
        </TagWrapper>

        {/* ====== y axis name */}
        <TagWrapper>
          <h3>Y axis Name: </h3>
          <OptionInput type='text' />
        </TagWrapper>

        {/* ====== x axis name */}
        <TagWrapper>
          <h3> X axis Name: </h3>
          <OptionInput type='text' />
        </TagWrapper>
        {/* ====== next button */}
        <ButtonComponent
          success
          md
          position='absolute'
          bottom='4vh'
          right='3vw'
        >
          Next
        </ButtonComponent>
      </OptionWrapper>
    </Container>
  );
};

export default Options;

Options.getLayout = (page) => {
  return (
    <NavLayout>
      <>{page}</>
    </NavLayout>
  );
};
