import HeadTitle from '../components/HeadTitle.js';
import Nav from '../components/Nav';
import Showcase from '../components/Showcase';

export default function Home() {
  return (
    <>
      <HeadTitle />
      <Nav current="Strona główna"/>
      <Showcase />
    </>
  );
}
