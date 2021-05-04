import React, { memo, useMemo } from 'react';
import { ConsentServer, useAppSelector } from '../../store';
import { ConsentsView } from './ConsentsView';

/**
 * Consents
 */
export const Consents = memo(() => {
  const consents = useAppSelector((state) => state.consents.value);

  const rows: ConsentServer[] = useMemo(
    () => consents.map((item, index) => ({ ...item, index: index + 1 })),
    [consents]
  );

  return <ConsentsView rows={rows} />;
});
Consents.displayName = nameof(Consents);
