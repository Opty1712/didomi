import { useMemo } from 'react';
import { ConsentServer, useAppSelector } from '../../store';

/**
 * Hook for getting data for rendering `Consents`
 */
export const useConsents = () => {
  const consents = useAppSelector((state) => state.consents.value);

  const rows: ConsentServer[] = useMemo(
    () => consents.map((item, index) => ({ ...item, index: index + 1 })),
    [consents]
  );

  return { rows };
};
