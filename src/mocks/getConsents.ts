import 'isomorphic-fetch';
import { url } from './constant';

export const getConsents = async () => {
  const result = await fetch(url, { method: 'GET' })
    .then((response) => response.json())
    .catch((e) => console.error(e));

  return result;
};
