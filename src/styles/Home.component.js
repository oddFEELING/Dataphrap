/** 🌹oddFEELING */

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.info()};
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lt_2()};
`;

//=============================================>  HELPER SECTION
export const HelperSection = styled.section`
  gap: 10vh;
  width: 40%;
  height: 100%;
  display: flex;
  padding: 40px;
  flex-direction: column;
`;

export const ImportWrapper = styled.div`
  gap: 3vh;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`;

export const TextPaste = styled.textarea`
  width: 90%;
  border: none;
  resize: none;
  height: 300px;
  padding: 3%;
  font-family: ${({ theme }) => theme.fonts.sec};
  font-size: ${({ theme }) => theme.fonts.size.md};
  transition: ${({ theme }) => theme.transition()};
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ theme }) => theme.colors.lt_2()};
  outline: thin solid ${({ theme }) => theme.colors.dk_2(70)};

  &:focus {
    box-shadow: ${({ theme }) => theme.shadow.md};
    background-color: ${({ theme }) => theme.colors.lt_1()};
    outline: 2px solid ${({ theme }) => theme.colors.info(70)};
  }
`;
