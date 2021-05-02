import fetchMock from 'fetch-mock';
import { url } from './constant';
import { mockData } from './data';
import { getConsents } from './getConsents';

export const getConsentsMock = async () => {
  await sleep();
  fetchMock.get(url, mockData);
  const data = await getConsents().then((data) => data);
  fetchMock.reset();

  return data;
};

const sleep = (ms = 2000) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
