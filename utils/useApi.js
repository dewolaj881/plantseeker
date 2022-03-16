import {useQuery} from 'react-query';

export default function useApi(url) {
  return useQuery(url, () => fetch(url).then((res) => {
    if (res.ok) {
      return res.json();
    }
    const error = new Error('Fetch Error');
    error.res = res;
    error.url = url;
    throw error;
  }));
}

export function useApiFetch(path) {
  return useApi(`https://cfpapi.herokuapp.com/api/${path}`);
}

export function useAllPlants() {
  return useApiFetch('getAllPlants');
}

export function useSearchPlants(query) {
  return useApiFetch(`findByKeyword?keyword=${encodeURIComponent(query)}`);
}

export function usePlant(id) {
  return useApiFetch(`getPlantById?id=${encodeURIComponent(id)}`);
}
