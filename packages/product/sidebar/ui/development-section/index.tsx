/** @jsxImportSource @emotion/react */
import React from 'react';

import { useDevelopmentLinks } from '../../data';
import { CollapsableSection, SectionMenu } from '../../shared';

export const DevelopmentSection = () => {
  const developmentLinks = useDevelopmentLinks();

  return (
    <CollapsableSection title="development">
      <SectionMenu links={developmentLinks} />
    </CollapsableSection>
  );
};
