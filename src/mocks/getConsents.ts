import fetchMock from 'fetch-mock';
import 'isomorphic-fetch';
import { addInitialMockData, useAppDispatch, useAppSelector } from '../store';
import { sleep } from '../utils';
import { url } from './constant';
import { mockData } from './data';

const getConsents = async () => {
  const result = await fetch(url, { method: 'GET' })
    .then((response) => response.json())
    .catch((e) => console.error(e));

  return result;
};

const getConsentsMock = async () => {
  await sleep();
  fetchMock.get(url, mockData);
  const data = await getConsents()
    .then((data) => data)
    .catch((e) => console.error(e));
  fetchMock.reset();

  return data;
};

export const useAddMockData = () => {
  const consents = useAppSelector((state) => state.consents.value);
  const dispatch = useAppDispatch();

  getConsentsMock()
    .then((data) => {
      consents.length === 0 && dispatch(addInitialMockData(data));
    })
    .catch((e) => console.error(e));
};
