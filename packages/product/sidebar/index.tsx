/** @jsxImportSource @emotion/react */
import React from 'react';

import { DevelopmentLinksProvider } from './data/development-links';
import { headerCss, sidebarCss } from './styles';
import { DevelopmentSection } from './ui/development-section';
import { PlanningSection } from './ui/planning-section';

export const Sidebar = () => {
  return (
    <DevelopmentLinksProvider>
      <div css={sidebarCss}>
        <div css={headerCss}>ELS project</div>
        <PlanningSection />
        <DevelopmentSection />
      </div>
    </DevelopmentLinksProvider>
  );
};
