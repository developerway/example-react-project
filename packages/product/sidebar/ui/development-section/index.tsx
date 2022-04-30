/** @jsxImportSource @emotion/react */
import React from 'react';

import { useDevelopmentLinks } from '../../data/development-links';
import { CollapsableSection } from '../../shared/collapsable-section';
import { SectionMenu } from '../../shared/section-menu';

export const DevelopmentSection = () => {
  const developmentLinks = useDevelopmentLinks();

  return (
    <CollapsableSection title="development">
      <SectionMenu links={developmentLinks} />
    </CollapsableSection>
  );
};
