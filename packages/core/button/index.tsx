/** @jsxImportSource @emotion/react */
import React, { PropsWithChildren, ReactNode } from 'react';

import { buttonCss, iconCss, containerCss } from './styles';

type ButtonProps = PropsWithChildren<{
  onClick: () => void;
  iconBefore?: ReactNode;
}>;

export const Button = ({ children, onClick, iconBefore }: ButtonProps) => {
  return (
    <button onClick={onClick} css={buttonCss}>
      {iconBefore && <span css={iconCss}>{iconBefore}</span>}
      <span css={containerCss}>{children}</span>
    </button>
  );
};
