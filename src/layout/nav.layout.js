/** 🌹oddFEELING */

import React from 'react';
import styled from 'styled-components';

//=============================================>  # RENDER
const NavLayout = ({ children }) => {
  return (
    <Container>
      <Nav>
        <Title>DATAPHRAP</Title>
        other items
      </Nav>
      {children}
    </Container>
  );
};

export default NavLayout;

//=============================================>  # COMPONENTS

const Container = styled.div`
  top: 0;
  width: 100%;
  display: flex;
  height: 100vh;
  min-height: 800px;
  align-items: center;
  flex-direction: column;
`;

const Nav = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 5vw;
  align-items: center;
  height: max(50px, 8vh);
  backdrop-filter: blur(15px);
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.info()};
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.size.md};
`;
