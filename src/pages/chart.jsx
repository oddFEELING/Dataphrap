/** 🌹oddFEELING */

import React, { useId, useEffect, useRef } from 'react';
import highcharts from 'Highcharts';
import Script from 'next/script';
import NavLayout from '../layout/nav.layout';

const Chart = () => {
  const ChartId = useId;
  const chartref = useRef();

  useEffect(() => {
    highcharts.chart(chartref.current, {
      navigation: {
        buttonOptions: {
          theme: {
            // Good old text links
            style: {
              color: '#039',
              textDecoration: 'underline',
            },
          },
        },
      },

      exporting: {
        buttons: {
          contextButton: {
            enabled: true,
          },
        },
      },

      chart: {
        type: 'bar',
        renderTo: ChartId,
      },
      title: {
        text: 'Fruit Consumption',
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges'],
      },
      yAxis: {
        title: {
          text: 'Fruit eaten',
        },
      },
      series: [
        {
          name: 'Jane',
          data: [1, 0, 4],
        },
        {
          name: 'John',
          data: [5, 7, 3],
        },
      ],
    });
  }, []);
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
      {' '}
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
