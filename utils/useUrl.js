import {useRouter} from 'next/router';

const domain = 'http://codeforgreen.zspwrzesnia.pl';

export default function useUrl() {
  const path = usePath();

  return `${domain}${path}`;
}

export function usePath() {
  const router = useRouter();
  const query = Object.entries(router.query)
    .filter(([name]) => !name.startsWith('utm'))
    .map(([name, value]) => `${name}=${encodeURIComponent(value)}`)
    .join('&');

  return `${router.basePath}${router.pathname}${query ? `?${query}` : ''}`;
}

export {domain};
