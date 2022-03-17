import {useEffect} from 'react';
import ReactGA from 'react-ga4';

export default function useSearch(query) {
  useEffect(() => {
    ReactGA.event('search', {
      search_term: query
    });
  }, [query]);
}
