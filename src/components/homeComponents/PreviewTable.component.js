/** 🌹oddFEELING */

import React from 'react';
import { dataStore } from '../../global/data.global';
import styled from 'styled-components';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

//=============================================>   RENDER
const PreviewTable = () => {
  const { fields, data: Data } = dataStore((state) => state);
  return (
    <TableContainer sx={{ width: '90%', height: '600px' }}>
      <Table>
        <TableHead>
          <TableRow
            sx={{ backgroundColor: '#F5F7F9', border: '2px solid grey' }}
          >
            <TableCell>S/N</TableCell>
            {fields &&
              fields.map((field, index) => {
                if (field !== '')
                  return (
                    <TableCell key={index} sx={{ border: '2px solid grey' }}>
                      {field}
                    </TableCell>
                  );
              })}
          </TableRow>
        </TableHead>

        <TableBody>
          {Data.map((data, index) => {
            const sn = index + 1;
            const DataValues = Object.values(data);
            return (
              <TableRow key={index}>
                <TableCell
                  sx={{ backgroundColor: '#F5F7F9', border: '2px solid grey' }}
                >
                  {sn}
                </TableCell>
                {DataValues.map((key, index) => {
                  return (
                    <TableCell key={index} sx={{ border: 'thin solid grey' }}>
                      {key ? key : 0}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(PreviewTable);
