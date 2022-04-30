/** @jsxImportSource @emotion/react */

import { B200, B300, B400 } from '@dwreact/core-styles';
import { css } from '@emotion/react';

export const buttonCss = css`
  display: flex;
  padding: 0.5rem 1rem;
  margin: 0;
  border-radius: 3px;
  background: ${B200};
  align-items: center;
  border: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background: ${B300};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${B400};
  }

  &:active {
    background: ${B400};
  }
`;

export const containerCss = css`
  flex: 1 0 auto;
`;

export const iconCss = css`
  flex: 0 0 auto;
  align-self: stretch;
`;
