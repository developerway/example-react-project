/** @jsxImportSource @emotion/react */

import React from 'react';

import { Layout } from '@dwreact/core-layout';
import { Board } from '@dwreact/product-board';
import { Sidebar } from '@dwreact/product-sidebar';
import { TopBar } from '@dwreact/product-topbar';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Example react project in a monorepo</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <Layout topBar={<TopBar />} sidebar={<Sidebar />} page={<Board />} />
    </>
  );
};

export default HomePage;
