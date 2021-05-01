import React, { memo, useEffect } from 'react';
import { Consents } from '../components';
import { mockData } from '../mocks';
import { addInitialMockData, useAppDispatch, useAppSelector } from '../store';

export const CollectedConsents = memo(() => {
  const consents = useAppSelector((state) => state.consents.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    consents.length === 0 && dispatch(addInitialMockData(mockData));
  }, [consents.length, dispatch]);

  return <Consents />;
});
CollectedConsents.displayName = nameof(CollectedConsents);
