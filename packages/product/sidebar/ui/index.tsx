import React from 'react';

import { DevelopmentSection } from './development-section';
import { PlanningSection } from './planning-section';

export const SidebarSections = () => {
  return (
    <>
      <PlanningSection />
      <DevelopmentSection />
    </>
  );
};
