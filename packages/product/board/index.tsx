import React from 'react';

import Link from 'next/link';

export const Board = () => {
  return (
    <ul>
      <li>
        <Link href="/issue/1">Issue 1</Link>
      </li>
      <li>
        <Link href="/issue/2">Issue 2</Link>
      </li>
      <li>
        <Link href="/issue/3">Issue 3</Link>
      </li>
    </ul>
  );
};
