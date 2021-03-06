/** 🌹oddFEELING */

import React, { useId, useEffect, useRef } from 'react';
import highcharts from 'Highcharts';
import Script from 'next/script';
import NavLayout from '../layout/nav.layout';
import { optionStore } from '../global/options/options.global';
import useLineSeries from '../logic/useLineSeries';
import useBarSeries from '../logic/useBarSeries';

const Chart = () => {
  const ChartId = useId;
  const chartref = useRef();
  const { options } = optionStore();

  console.log(options.chart.type);

  useEffect(() => {
    console.log(options);
    options &&
      highcharts.chart(chartref.current, {
        ...options,
      });
  }, [options]);

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        id={ChartId}
        style={{ width: '80%', height: '800px' }}
        ref={chartref}
      />
      <Script src='https://code.highcharts.com/modules/export-data.js' />
      <Script src='https://code.highcharts.com/highcharts.js' />
      <Script src='https://code.highcharts.com/modules/offline-exporting.js' />
    </div>
  );
};

export default Chart;

Chart.getLayout = (page) => {
  return <NavLayout>{page}</NavLayout>;
};
