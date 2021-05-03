import React, { memo } from 'react';
import { Consents } from '../components';
import { useAddMockData } from '../mocks';

/**
 * Container for viewing list of collected consents
 */
export const CollectedConsents = memo(() => {
  useAddMockData();

  return <Consents />;
});
CollectedConsents.displayName = nameof(CollectedConsents);
