import Link from 'next/link';

export default function Card({plant = {}}) {
  const {description, englishName, family, id, img, latinName, origin, polishName, species} = plant;
  console.log(plant);
  return (
    <Link href={`/cardInfo.html?id=${plant.id}`}>
      <div className="cardLink">
        <div>
          <img className="w-72 h-56 rounded-2xl mx-4"
               src={img || 'https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg'}
               alt={polishName}/>
          <div className="text-xl w-72 bg-transparent text-white font-bold minusMargin">
            <h1 className="text-center ml-6"><b>{/*polishName*/ 'Magnolia'}</b> <span
              className="font-light">{'Magnolia L.'}</span></h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
