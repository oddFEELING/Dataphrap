/** 🌹oddFEELING */

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  padding: 40px;
  flex-direction: column;
  justify-content: space-between;
  transition: ${({ theme }) => theme.transition()};
  background-color: ${({ theme }) => theme.colors.lt_2()};
`;

export const Main = styled.main`
  gap: 4vw;
  width: 100%;
  height: 90%;
  display: flex;
  align-self: start;
  align-items: center;
  justify-content: center;
`;

export const OptionWrapper = styled.div`
  gap: 1.5vh;
  width: 50%;
  height: 90%;
  padding: 1vw;
  display: flex;
  position: relative;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow.lg};
  border-radius: ${({ theme }) => theme.radius.sm};
`;

export const TagWrapper = styled.div`
  gap: 1vw;
  width: 100%;
  height: auto;
  display: flex;
  padding: 5px 0;
  flex-wrap: wrap;
  align-items: center;
`;

export const Selector = styled.select`
  width: 200px;
  height: 40px;
  outline: none;
  cursor: pointer;
  padding: 5px 15px;
  font-family: ${({ theme }) => theme.fonts.pri};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: ${({ theme }) => theme.fonts.size.md};

  option {
    outline: none;
    border: none;
  }
`;

export const OptionInput = styled.input`
  width: 300px;
  height: 40px;
  padding: 5px 15px;
  font-family: ${({ theme }) => theme.fonts.pri};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: ${({ theme }) => theme.fonts.size.md};
  transition: ${({ theme }) => theme.transition()};
  outline: 0 solid ${({ theme }) => theme.colors.info()};
  background-color: ${({ theme }) => theme.colors.lt_2()};
  border: thin solid ${({ theme }) => theme.colors.dk_2(70)};

  &:focus {
    box-shadow: ${({ theme }) => theme.shadow.sm};
    outline: thin solid ${({ theme }) => theme.colors.info()};
    background-color: ${({ theme }) => theme.colors.lt_1()};
  }
`;
