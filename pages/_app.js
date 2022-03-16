import '../styles/globals.css';
import '../tailwind.config';
import {QueryClient, QueryClientProvider} from 'react-query';
import ReactGA from 'react-ga4';
import useAnalytics from '../utils/useAnalytics.js';

ReactGA.initialize('G-P78F7T2CHH');

const queryClient = new QueryClient();

function MyApp({Component, pageProps}) {
  useAnalytics();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
