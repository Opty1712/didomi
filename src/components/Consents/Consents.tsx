import React, { memo } from 'react';
import { ConsentsView } from './ConsentsView';
import { useConsents } from './useConsents';

/**
 * Consents - table view
 */
export const Consents = memo(() => {
  const { rows } = useConsents();

  return <ConsentsView rows={rows} />;
});
Consents.displayName = nameof(Consents);
