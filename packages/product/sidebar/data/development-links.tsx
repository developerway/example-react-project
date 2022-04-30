import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';

type LinkType = {
  title: string;
  url: string;
};

type Context = LinkType[];

const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const getLinks = async () => {
  await wait(300);
  return [
    {
      title: 'Code',
      url: '#',
    },
    {
      title: 'Release',
      url: '#',
    },
  ];
};
const defaultContext = {} as Context;

const Context = createContext<Context>(defaultContext);

export const DevelopmentLinksProvider = ({ children }: { children: ReactNode }) => {
  const [links, setLinks] = useState<LinkType[]>([]);

  useEffect(() => {
    getLinks().then((result) => {
      setLinks(result);
    });
  }, []);
  return <Context.Provider value={links}>{children}</Context.Provider>;
};

export const useDevelopmentLinks = () => useContext(Context);
