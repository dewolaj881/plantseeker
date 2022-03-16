import {useEffect} from 'react';
import ReactGA from 'react-ga4';
import {usePath} from './useUrl.js';

export default function useAnalytics() {
  const path = usePath();

  useEffect(() => {
    ReactGA.send({hitType: 'pageview', page: path});
  }, [path]);
}
