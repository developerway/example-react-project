import React from 'react';

import { Button } from '@dwreact/core-button';

export const CreateButton = () => {
  const onCreateClick = () => {
    console.info('Create issue here');
  };

  const createIcon = <span>+</span>;

  return (
    <Button onClick={onCreateClick} iconBefore={createIcon}>
      Create issue
    </Button>
  );
};
