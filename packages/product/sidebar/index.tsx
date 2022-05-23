/** @jsxImportSource @emotion/react */
import React from 'react';

import { DevelopmentLinksProvider } from './data';
import { headerCss, sidebarCss } from './styles';
import { SidebarSections } from './ui';

export const Sidebar = () => {
  return (
    <DevelopmentLinksProvider>
      <div css={sidebarCss}>
        <div css={headerCss}>ELS project</div>
        <SidebarSections />
      </div>
    </DevelopmentLinksProvider>
  );
};
