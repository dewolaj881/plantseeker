import Button from './Button'

export default function Showcase() {
  return (
    <div className="bg-showcase bg-cover bg-no-repeat bg-center absolute">
      <h1 className="text-showcase">THIS IS PLANTSEEKER</h1>
      <p className="text-showcaseSecondary text-center">Start taking care of your plants, like it always should have been.</p>
      <div className="flex justify-center space-x-4 mt-16">
        <Button className="buttonExplore">Explore</Button>
        <Button className="buttonSearch">Search Now</Button>
      </div>
    </div>
  )
}