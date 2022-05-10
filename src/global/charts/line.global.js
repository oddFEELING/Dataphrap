/** 🌹oddFEELING */

import create from 'zustand';

export const lineStore = create((set) => ({
  name: null,
  x: null,
  y: null,
  setter: (prop, payload) => set(() => ({ [prop]: payload })),
}));
