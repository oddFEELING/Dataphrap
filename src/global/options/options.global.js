/** 🌹oddFEELING */

import create from 'zustand';
import { setter } from './option.actions';

export const optionStore = create((set) => ({
  options: {
    accessibility: {
      description: undefined,
    },

    chart: {
      type: 'line',
      alignTicks: true,
      backgroundColor: '#FFFFFF',
      borderColor: '#ffffff',
      borderRadius: 0,
      boderWidth: 0,
      colorCount: 20,
      events: {},
      margin: undefined,
      marginTop: undefined,
      marginBottom: undefined,
      marginLeft: undefined,
      marginRight: undefined,
      renderTo: undefined,
    },

    title: {
      text: '',
    },

    yAxis: {
      title: {
        text: {},
      },
    },

    xAxis: {
      title: {
        text: '',
      },
    },

    series: [],

    cerdits: {
      text: 'Dataphyte',
      href: 'https://dataphyte.com',
      style: { color: '#999999', cursor: 'pointer', fontSize: '9px' },
    },
  },

  // ======= actions -->
  setType: (type) => set((state) => setter(state, type, 'chart', 'type')),
}));
