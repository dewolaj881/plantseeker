import {useQuery} from 'react-query';

export default function useFetch(url) {
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
  return useFetch(`https://cfpapi.herokuapp.com/api/${path}`);
}

export function useAllPlants() {
  return useApiFetch('getallplants');
}

export function useSearchPlants(query) {
  //encodeURIComponent(query);
  return useAllPlants(); // TODO brak API
}

export function usePlant(id) {
  return useApiFetch(`getPlantById?id=${encodeURIComponent(id)}`)
}
