import {useRouter} from 'next/router';
import CardInfo from '../components/CardInfo';
import Error from '../components/Error';

export default function Home() {
  const router = useRouter();
  if (!router.query.id) {
    return <Error/>;
  }

  return (
    <CardInfo id={router.query.id}/>
  );
}
