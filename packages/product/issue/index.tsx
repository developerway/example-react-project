import React from 'react';

type IssueProps = {
  id: string;
};

export const Issue = ({ id }: IssueProps) => {
  return (
    <>
      ... here there will be a lot of code for issue view with <b>id: {id}</b>
    </>
  );
};
