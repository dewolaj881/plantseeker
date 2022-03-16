import {useRouter} from 'next/router';

export default function useUrl() {
  const router = useRouter();
  const query = Object.entries(router.query).map(([name, value]) => `${name}=${encodeURIComponent(value)}`).join('&');

  return `http://codeforgreen.zspwrzesnia.pl${router.basePath}${router.pathname}${query ? `?${query}` : ''}`;
}
