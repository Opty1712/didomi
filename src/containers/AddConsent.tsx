import React, { memo } from 'react';
import { Form } from '../components';
import { useAddMockData } from '../mocks';

/**
 * Container for `Give Consent` page
 */
export const AddConsent = memo(() => {
  useAddMockData();

  return <Form />;
});
AddConsent.displayName = nameof(AddConsent);
