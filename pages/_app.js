import '../styles/globals.css';
import '../tailwind.config';
import Script from 'next/script.js';
import {QueryClient, QueryClientProvider} from 'react-query';
import ReactGA from 'react-ga4';
import useAnalytics from '../utils/useAnalytics.js';

ReactGA.initialize('G-P78F7T2CHH');

const queryClient = new QueryClient();

function MyApp({Component, pageProps}) {
  useAnalytics();

  return (
    <>
      <Script>
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "b25aljhjzr");`}
      </Script>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
