/** 🌹oddFEELING */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import ButtonComponent from '../Button.component';
import PreviewTable from './PreviewTable.component';
import { dataStore } from '../../global/data.global';

//=============================================>  RENDER
const StageComponent = () => {
  const router = useRouter();
  const { data: Data } = dataStore((state) => state);

  return (
    <Container>
      {!Data && (
        <>
          <lottie-player
            src='https://assets3.lottiefiles.com/packages/lf20_agnejizn.json'
            background='transparent'
            speed='1'
            style={{ width: '250px', height: '250px', marginTop: '-150px' }}
            loop
            autoplay
          ></lottie-player>
          <PlaceHolder>Select data to show preview</PlaceHolder>
        </>
      )}
      {Data && (
        <>
          <h3>DATA PREVIEW</h3>
          <PreviewTable />

          <div
            style={{
              display: 'flex',
              gap: '10px',
              width: '90%',
              justifyContent: 'space-between',
            }}
          >
            <ButtonComponent md dk onClick={() => setData(null)}>
              reset data
            </ButtonComponent>
            <ButtonComponent md success onClick={() => router.push('/options')}>
              Next
            </ButtonComponent>
          </div>
        </>
      )}
    </Container>
  );
};

export default React.memo(StageComponent);

//=============================================>  COMPONENT

const Container = styled.section`
  gap: 5vh;
  width: 60%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadow.md};
  background-color: ${({ theme }) => theme.colors.lt_1()};
`;

const PlaceHolder = styled.p`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.size.md};
  color: ${({ theme }) => theme.colors.dk_2(90)};
`;
