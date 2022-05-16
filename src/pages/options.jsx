/** 🌹oddFEELING */

import React from 'react';
import { useRouter } from 'next/router';
import NavLayout from '../layout/nav.layout';
import {
  Container,
  Main,
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
import LineOptions from '../components/charts/line/line.options';
import BarOptions from '../components/charts/bar/bar.options';
import AreaOptions from '../components/charts/area/area.options';

const Options = () => {
  const { fields, data: Data } = dataStore((state) => state);
  const optStore = optionStore();
  const router = useRouter();

  return (
    <Container>
      <IndicatorComponent step={2} details='Set Options' />
      <Main>
        {' '}
        <OptionWrapper>
          <h3>Set Chart type: </h3>
          <Selector
            value={optStore.options.chart.type}
            onChange={(e) => optStore.setType(e.target.value)}
          >
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
            <OptionInput
              type='text'
              value={optStore.options.title.text}
              onChange={(e) => optStore.setTitle(e.target.value)}
            />
          </TagWrapper>

          {/* ====== x axis name */}
          <TagWrapper>
            <h3> X axis Name: </h3>
            <OptionInput
              type='text'
              value={optStore.options.xAxis.title.text}
              onChange={(e) => optStore.setXName(e.target.value)}
            />
          </TagWrapper>

          {/* ====== y axis name */}
          <TagWrapper>
            <h3>Y axis Name: </h3>
            <OptionInput
              type='text'
              value={optStore.options.yAxis.title.text}
              onChange={(e) => optStore.setYName(e.target.value)}
            />
          </TagWrapper>

          {/* ====== next button */}
          <ButtonComponent
            success
            md
            position='absolute'
            bottom='4vh'
            right='3vw'
            onClick={() => router.push('/chart')}
          >
            Next
          </ButtonComponent>
        </OptionWrapper>
        {optStore.options.chart.type === 'line' && <LineOptions />}
        {optStore.options.chart.type === 'bar' && <BarOptions />}
        {optStore.options.chart.type === 'column' && (
          <h1>Column option not available yet</h1>
        )}
        {optStore.options.chart.type === 'pie' && (
          <h1>Pie option not available yet</h1>
        )}
        {optStore.options.chart.type === 'area' && <AreaOptions />}
      </Main>
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
