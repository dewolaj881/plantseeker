import { useRouter } from 'next/router';
import CardInfo from '../components/CardInfo';
import Error from '../components/Error';
import Nav from '../components/Nav';

export default function Home() {
  const router = useRouter();
  if (!router.query.id) {
    return <Error />;
  }

  return (
    <>
      <Nav current="Wyszukaj" />
      <CardInfo id={router.query.id} />
    </>
  );
}
