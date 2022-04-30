/** @jsxImportSource @emotion/react */
import React from 'react';

import { DevelopmentSection } from './development-section';
import { PlanningSection } from './planning-section';
import { headerCss, sidebarCss } from './styles';

export const Sidebar = () => {
  return (
    <div css={sidebarCss}>
      <div css={headerCss}>ELS project</div>
      <PlanningSection />
      <DevelopmentSection />
    </div>
  );
};
