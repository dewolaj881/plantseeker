import Link from 'next/link';

export default function Showcase() {
  return (
    <div className="bg-showcase bg-cover bg-no-repeat bg-center absolute">
      <h1 className="text-showcase">WITAJ NA PLANTSEEKER</h1>
      <p className="text-showcaseSecondary text-center">Zaopiekuj się swoimi roślinami w profesjonalny sposób.</p>
      <div className="flex justify-center space-x-4 mt-16">
        <Link href="/explore.html">
          <a className="buttonExplore">Zadbaj o rośliny</a>
        </Link>
        <Link href="/search.html">
          <a className="buttonSearch">Wyszukaj teraz</a>
        </Link>
      </div>
    </div>
  );
}
