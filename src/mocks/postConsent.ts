import fetchMock from 'fetch-mock';
import 'isomorphic-fetch';
import { addConsent, Consent, ConsentServer, useAppDispatch } from '../store';
import { sleep } from '../utils';
import { url } from './constant';

/** Fetch (post) of consent */
const postConsent = async (consent: Consent) => {
  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(consent)
  })
    .then((response) => response.json())
    .catch((e) => console.error(e));

  return result;
};

/** Mocked fetch (post) according to task requirements */
export const postConsentsMock = async (consent: Consent) => {
  await sleep();
  fetchMock.post(url, consent);
  const data = await postConsent(consent)
    .then((data) => data)
    .catch((e) => console.error(e));

  fetchMock.reset();

  return data;
};

/** Hook for posting new consent to server and adding it to Redux store */
export const usePostConsent = () => {
  const dispatch = useAppDispatch();

  const postConsent = (consent: Consent) => {
    const consentServer: ConsentServer = { ...consent, id: Math.random() };

    return postConsentsMock(consentServer)
      .then((data: ConsentServer) => {
        dispatch(addConsent(data));

        return true;
      })
      .catch((e) => console.error(e));
  };

  return { postConsent };
};
