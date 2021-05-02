import React, { memo } from 'react';
import { Form } from '../components';
import { useAddMockData } from '../mocks';

export const AddConsent = memo(() => {
  useAddMockData();

  return <Form />;
});
AddConsent.displayName = nameof(AddConsent);
