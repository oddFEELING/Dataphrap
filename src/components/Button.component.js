/** 🌹oddFEELING */

import styled from 'styled-components';
import { css } from 'styled-components';

/**
 * Button Component
 *
 * @param {String} sm - small buttons
 */
const ButtonComponent = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  top: ${({ top }) => top && top};
  left: ${({ left }) => left && left};
  right: ${({ right }) => right && right};
  bottom: ${({ bottom }) => bottom && bottom};
  font-family: ${({ theme }) => theme.fonts.pri};
  transition: ${({ theme }) => theme.transition()};
  position: ${({ position }) => (position ? position : 'relative')};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.sm};
    border-radius: 8px;
  }

  //=============================================>  color
  ${({ success, info, warn, error, lt, dk }) =>
    (success || info || warn || error || lt || dk) &&
    css`
      background-color: ${({ theme }) => {
        if (success) return theme.colors.success();
        if (info) return theme.colors.info();
        if (warn) return theme.colors.warn();
        if (error) return theme.colors.error();
        if (lt) return theme.colors.lt_1();
        if (dk) return theme.colors.dk_1();
      }};

      color: ${({ theme }) => {
        if (success || info || warn || error || dk) return theme.colors.lt_1();
        if (lt) return theme.colors.dk_1();
      }};
    `}

  //=============================================>  # DIMENSIONS

  ${({ xs, sm, md, lg }) =>
    (xs || sm || md || lg) &&
    css`
      width: ${() => {
        if (xs) return '60px';
        if (sm) return '100px';
        if (md) return '400px';
        if (lg) return '500px';
      }};
      font-size: ${() => {
        if (xs) return '14px';
        if (sm) return '15px';
        if (md) return '16px';
        if (lg) return '18px';
      }};
      height: ${() => {}};
    `}
`;

export default ButtonComponent;
