/** 🌹oddFEELING */

import React, { useState } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { dataStore } from '../global/data.global';

//=============================================>  RENDER
const TagComponent = ({ ...props }) => {
  const [selected, setSelected] = useState(false);
  const { tag } = props;
  // ======= set selection mode -->
  const setMode = () => {
    setSelected((state) => !state);
  };

  return (
    <Container onClick={setMode} selected={selected}>
      <p>{tag}</p>
    </Container>
  );
};

export default React.memo(TagComponent);

//=============================================>  COMPONENT
const Container = styled.span`
  cursor: pointer;
  padding: 3px 15px;
  transition: ${({ theme }) => theme.transition()};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.lt_2()};
  border: thin solid ${({ theme }) => theme.colors.dk_2(10)};

  ${({ selected }) =>
    selected &&
    css`
      color: ${({ theme }) => theme.colors.lt_2()};
      box-shadow: ${({ theme }) => theme.shadow.sm};
      background-color: ${({ theme }) => theme.colors.success()};
    `}
`;
