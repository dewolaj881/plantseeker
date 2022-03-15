import {useRouter} from 'next/router';

// Zwraca adres URL na którym obecnie jesteśmy
export default function useUrl() {
  const router = useRouter();
  const query = Object.entries(router.query).map(([name, value]) => `${name}=${encodeURIComponent(value)}`).join('&');

  return `http://codeforgreen.zspwrzesnia.pl${router.basePath}${router.pathname}.html${query ? `?${query}` : ''}`;
}
