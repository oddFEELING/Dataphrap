/** 🌹oddFEELING */

import React, { useEffect, useState } from 'react';
import { dataStore } from '../global/data.global';
import { barStore } from '../global/charts/bar,global';
import { optionStore } from '../global/options/options.global';

const useBarSeries = () => {
  const { data: Data, fields } = dataStore();
  const { setSeries, setCategories } = optionStore();
  const { name, x, y } = barStore();
  const [ser, setSer] = useState([]);

  let serData = [];
  let cat = [];

  useEffect(() => {
    Data.map((data) => {
      serData.push(data[y]);
      cat.push(typeof data[x] === 'string' || 'number' ? data[x] : '');

      setSer(() => [
        {
          name: y,
          data: serData,
        },
      ]);
      //
    });

    // console.log(ser);
    setCategories([...cat]);
    setSeries(ser);
  }, [name, Data, x, y]);
};

export default useBarSeries;
