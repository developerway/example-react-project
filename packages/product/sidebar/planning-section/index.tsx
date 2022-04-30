/** @jsxImportSource @emotion/react */
import React from 'react';

import { CollapsableSection } from '../shared/collapsable-section';

import { sectionMenuCss, boardPickerCss } from './styles';

export const PlanningSection = () => {
  return (
    <CollapsableSection title="planning">
      <button css={boardPickerCss}>ELS board</button>

      <ul css={sectionMenuCss}>
        <li>
          <a href="#">Roadmap</a>
        </li>
        <li>
          <a href="#">Backlog</a>
        </li>
        <li>
          <a href="#">Kanban board</a>
        </li>
        <li>
          <a href="#">Reports</a>
        </li>
        <li>
          <a href="#">Roadmap</a>
        </li>
      </ul>

      <ul css={sectionMenuCss}>
        <li>
          <a href="#">Issues</a>
        </li>
        <li>
          <a href="#">Components</a>
        </li>
      </ul>
    </CollapsableSection>
  );
};
