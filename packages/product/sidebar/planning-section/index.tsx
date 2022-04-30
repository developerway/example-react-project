/** @jsxImportSource @emotion/react */
import React from 'react';

import { CollapsableSection } from '../shared/collapsable-section';

import { sectionMenuCss, boardPickerCss } from './styles';

export const SidebarPlanningSection = () => {
  return (
    <CollapsableSection title="planning">
      <button css={boardPickerCss}>ELS board</button>

      <ul css={sectionMenuCss}>
        <li>
          <a href="packages/product/sidebar/planning-section/planning-section#index.tsx">Roadmap</a>
        </li>
        <li>
          <a href="packages/product/sidebar/planning-section/planning-section#index.tsx">Backlog</a>
        </li>
        <li>
          <a href="packages/product/sidebar/planning-section/planning-section#index.tsx">Kanban board</a>
        </li>
        <li>
          <a href="packages/product/sidebar/planning-section/planning-section#index.tsx">Reports</a>
        </li>
        <li>
          <a href="packages/product/sidebar/planning-section/planning-section#index.tsx">Roadmap</a>
        </li>
      </ul>

      <ul css={sectionMenuCss}>
        <li>
          <a href="packages/product/sidebar/planning-section/planning-section#index.tsx">Issues</a>
        </li>
        <li>
          <a href="packages/product/sidebar/planning-section/planning-section#index.tsx">Components</a>
        </li>
      </ul>
    </CollapsableSection>
  );
};
