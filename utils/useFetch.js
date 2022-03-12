import {useQuery} from 'react-query';

export default function useApiFetch(path) {
  const url = `https://cfpapi.herokuapp.com/api/${path}`;
  return useQuery(url, () => fetch(url).then((res) => {
    if (res.ok) {
      return res.json();
    }
    const error = new Error('Fetch Error');
    error.res = res;
    error.path = path;
    throw error;
  }));
}
