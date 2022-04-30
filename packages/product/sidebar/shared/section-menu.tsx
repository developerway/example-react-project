/** @jsxImportSource @emotion/react */
import React from 'react';

import { sectionMenuCss } from './section-menu.styles';

export const SectionMenu = ({ links }: { links: { title: string; url: string }[] }) => {
  return (
    <ul css={sectionMenuCss}>
      {links.map(({ url, title }) => {
        return (
          <li key={title}>
            <a href={url}>{title}</a>
          </li>
        );
      })}
    </ul>
  );
};
