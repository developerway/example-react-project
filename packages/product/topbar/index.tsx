/** @jsxImportSource @emotion/react */
import React from 'react';

import { CreateButton } from './create-button';
import { Logo } from './logo';
import { topBarCss } from './styles';
import { TopMenu } from './top-menu';

export const TopBar = () => {
  return (
    <div css={topBarCss}>
      <Logo />
      <TopMenu />
      <CreateButton />
      more top bar items here like search bar and profile menu
    </div>
  );
};
