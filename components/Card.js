import Link from 'next/link';
import getImageUrl from '../utils/getImageUrl.js';
import LatinNameCard from './plant/LatinNameCard.js';

export default function Card({plant = {}}) {
  const {
    id,
    polishName,
    latinName,
    polishFamily,
    latinFamily,
    decorativeness,
    plantUsage,
    description,
    plant_type,
    images, // []
    toxicity,
    lightConditions,
    subsoil,
    watering,
    sort,
    height,
    bark,
    shoots,
    leaves,
    flowers_desc,
    flowers_date, // yyyy-MM-dd
    fruits_desc,
    fruits_date, // yyyy-MM-dd
    origin
  } = plant; // To wszystko jest w API i wszystko może być nullem!

  console.log(plant);

  return (
    <Link href={`/cardInfo.html?id=${id}`}>
      <div className="cardLink">
        <div>
          <img className="w-72 h-56 rounded-2xl mx-4 object-scale-down"
               src={getImageUrl(images?.[0])}
               alt={polishName}/>
          <div className="text-xl w-72 bg-transparent text-white font-bold minusMargin">
            <h1 className="text-center ml-6"><b>{polishName}</b> <LatinNameCard latinName={latinName}/></h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
