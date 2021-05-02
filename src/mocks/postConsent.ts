import fetchMock from 'fetch-mock';
import 'isomorphic-fetch';
import { addConsent, Consent, useAppDispatch } from '../store';
import { sleep } from '../utils';
import { url } from './constant';

const postConsent = async (consent: Consent) => {
  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(consent)
  })
    .then((response) => response.json())
    .catch((e) => console.error(e));

  return result;
};

export const postConsentsMock = async (consent: Consent) => {
  await sleep();
  fetchMock.post(url, consent);
  const data = await postConsent(consent)
    .then((data) => data)
    .catch((e) => console.error(e));

  fetchMock.reset();

  return data;
};

export const usePostConsent = () => {
  const dispatch = useAppDispatch();

  const postConsent = (consent: Consent) =>
    postConsentsMock(consent)
      .then((data) => {
        dispatch(addConsent(data));

        return true;
      })
      .catch((e) => console.error(e));

  return { postConsent };
};
