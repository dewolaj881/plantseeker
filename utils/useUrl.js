import {useRouter} from 'next/router';

// Zwraca adres URL na którym obecnie jesteśmy
export default function useUrl() {
  const router = useRouter();

  return `http://codeforgreen.zspwrzesnia.pl${router.basePath}${router.pathname}`;
}
