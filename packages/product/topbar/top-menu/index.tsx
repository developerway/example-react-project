/** @jsxImportSource @emotion/react */
import React from 'react';

import Link from 'next/link';

import { mainMenuCss } from './styles';

export const TopMenu = () => {
  return (
    <ul css={mainMenuCss}>
      <li>
        <Link href="/">Your work</Link>
      </li>
      <li>
        <a href="#">Projects</a>
      </li>
      <li>
        <a href="#">Filters</a>
      </li>
      <li>
        <a href="#">Dashboards</a>
      </li>
      <li>
        <a href="#">People</a>
      </li>
      <li>
        <a href="#">Apps</a>
      </li>
    </ul>
  );
};
