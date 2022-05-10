/** 🌹oddFEELING */

import React from 'react';
import Script from 'next/script';
import styled from 'styled-components';

//=============================================>   # RENDER
const NotFound = () => {
  const animStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    index: 2,
  };
  return (
    <Container>
      <Text>Page Not FOUND!!</Text>
      <lottie-player
        src='https://assets7.lottiefiles.com/packages/lf20_kjixtysj.json'
        background='white'
        speed='1'
        style={{ ...animStyle }}
        loop
        autoplay
      ></lottie-player>
      <Script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js' />
    </Container>
  );
};

export default NotFound;

//=============================================>  # COMPONENT

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  font-size: ${({ theme }) => theme.fonts.size.xl};
`;
