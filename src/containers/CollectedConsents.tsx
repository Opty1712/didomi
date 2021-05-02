import React, { memo } from 'react';
import { Consents } from '../components';
import { useAddMockData } from '../mocks';

export const CollectedConsents = memo(() => {
  useAddMockData();

  return <Consents />;
});
CollectedConsents.displayName = nameof(CollectedConsents);
