/** 🌹oddFEELING */

import create from 'zustand';

//=============================================>  # STORE
export const dataStore = create((set) => ({
  data: null,
  fields: [],
  type: null,
  setType: (type) => set(() => ({ type })),
  setData: (data) => set(() => ({ data: data })),
  setFields: (fields) => set(() => ({ fields })),
}));
