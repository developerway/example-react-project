/** @jsxImportSource @emotion/react */
import React, { useState, PropsWithChildren } from 'react';

import { sidebarSectionCss, sidebarSectionTitle } from './collapsable-section.styles';

type CollapsableSectionProps = PropsWithChildren<{
  title: string;
}>;

export const CollapsableSection = ({ children, title }: CollapsableSectionProps) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div css={sidebarSectionCss}>
      <div css={sidebarSectionTitle} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      {isOpen && children}
    </div>
  );
};
