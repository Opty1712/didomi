import { addInitialMockData, useAppDispatch, useAppSelector } from '../store';
import { getConsentsMock } from './getConsentsMock';

export const useAddMockData = () => {
  const consents = useAppSelector((state) => state.consents.value);
  const dispatch = useAppDispatch();

  getConsentsMock().then((data) => {
    consents.length === 0 && dispatch(addInitialMockData(data));
  });

  return {};
};
