import Button from './Button'

export default function Showcase() {
  return (
    <div className="bg-showcase bg-cover bg-no-repeat bg-center absolute">
      <h1 className="text-showcase">WITAJ NA PLANTSEEKER</h1>
      <p className="text-showcaseSecondary text-center">Zaopiekuj się swoimi roślinami w profesjonalny sposób.</p>
      <div className="flex justify-center space-x-4 mt-16">
      <a href="/plants/explore">
        <Button className="buttonExplore">Zadbaj o rośliny</Button>
      </a>
        <a href='/plants/search'>
          <Button className="buttonSearch">Wyszukaj teraz</Button>
        </a>
      </div>
    </div>
  )
}
