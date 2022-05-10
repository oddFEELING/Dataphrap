/** 🌹oddFEELING */

import create from 'zustand';
import { setter } from './option.actions';

export const optionStore = create((set) => ({
  options: {
    accessibility: {
      description: 'new chart desc',
    },

    chart: {
      type: null,
      // alignTicks: true,
      // backgroundColor: '#FFFFFF',
      // borderColor: '#ffffff',
      // borderRadius: 0,
      // boderWidth: 0,
      // colorCount: 20,
      // events: {},
      // margin: undefined,
      // marginTop: undefined,
      // marginBottom: undefined,
      // marginLeft: undefined,
      // marginRight: undefined,
      // renderTo: undefined,
    },

    title: {
      text: '',
    },

    yAxis: {
      title: {
        text: '',
      },
    },

    xAxis: {
      title: {
        text: '',
        offset: 40,
      },
      categories: [],
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
  setSeries: (series) => set((state) => setter(state, series, 'series')),
  setTitle: (title) => set((state) => setter(state, title, 'title', 'text')),
  setXName: (name) =>
    set((state) => setter(state, name, 'xAxis', 'title', 'text')),
  setYName: (name) =>
    set((state) => setter(state, name, 'yAxis', 'title', 'text')),
  setCategories: (cat) =>
    set((state) => setter(state, cat, 'xAxis', 'categories')),
}));
