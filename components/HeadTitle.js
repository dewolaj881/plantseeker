import Head from 'next/head.js';
import useUrl, {domain} from '../utils/useUrl.js';

export default function HeadTitle({title}) {
  const url = useUrl();
  const validTitle = title ? `${title} - Plantseeker` : 'Plantseeker';
  return (
    <Head>
      <title>{validTitle}</title>
      <meta property="description" content="Zaopiekuj się swoimi roślinami w profesjonalny sposób."/>
      <meta name="theme-color" content="#11212e"/>
      <meta property="og:title" content={validTitle}/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content={`${domain}/plants/img/leaf.png`}/>
      <meta property="og:url" content={url}/>
      <meta property="og:site_name" content="Plantseeker"/>
      <meta property="og:description" content="Zaopiekuj się swoimi roślinami w profesjonalny sposób."/>
    </Head>
  );
}
