/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';

import { pageCss, mainContentCss, appCss } from './styles';

type LayoutProps = {
  topBar: ReactNode;
  sidebar: ReactNode;
  page: ReactNode;
};

export const Layout = ({ topBar, sidebar, page }: LayoutProps) => {
  return (
    <div css={appCss}>
      {topBar}
      <div css={mainContentCss}>
        {sidebar}
        <div css={pageCss}>{page}</div>
      </div>
    </div>
  );
};
