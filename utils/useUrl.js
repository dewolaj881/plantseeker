import {useRouter} from 'next/router';

const domain = 'http://codeforgreen.zspwrzesnia.pl';

export default function useUrl() {
  const router = useRouter();
  const query = Object.entries(router.query).map(([name, value]) => `${name}=${encodeURIComponent(value)}`).join('&');

  return `${domain}${router.basePath}${router.pathname}${query ? `?${query}` : ''}`;
}

export {domain};
