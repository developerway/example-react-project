/** @jsxImportSource @emotion/react */
import React from 'react';

import { CollapsableSection } from '../../shared/collapsable-section';
import { SectionMenu } from '../../shared/section-menu';

import { boardPickerCss } from './styles';

const planningLinks = [
  {
    title: 'Roadmap',
    url: '#',
  },
  {
    title: 'Backlog',
    url: '#',
  },
  {
    title: 'Kanban board',
    url: '#',
  },
  {
    title: 'Reports',
    url: '#',
  },
];

const issuesLinks = [
  {
    title: 'Issues',
    url: '#',
  },
  {
    title: 'Components',
    url: '#',
  },
];

export const PlanningSection = () => {
  return (
    <CollapsableSection title="planning">
      <button css={boardPickerCss}>ELS board</button>

      <SectionMenu links={planningLinks} />

      <SectionMenu links={issuesLinks} />
    </CollapsableSection>
  );
};
