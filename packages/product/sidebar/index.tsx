/** @jsxImportSource @emotion/react */
import React from 'react';

import { SidebarDevelopmentSection } from './development-section';
import { SidebarPlanningSection } from './planning-section';
import { sidebarHeaderCss, sidebarCss } from './styles';

export const Sidebar = () => {
  return (
    <div css={sidebarCss}>
      <div css={sidebarHeaderCss}>ELS project</div>
      <SidebarPlanningSection />
      <SidebarDevelopmentSection />
    </div>
  );
};
