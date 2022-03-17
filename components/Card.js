import Link from 'next/link';
import getImageUrl from '../utils/getImageUrl.js';

export default function Card({ plant = {} }) {
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
    images,
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
    flowers_date,
    fruits_desc,
    fruits_date,
    origin,
    published,
    username
  } = plant; // To wszystko jest w API i wszystko może być nullem!

  console.log(plant);

  return (
    <Link href={`/cardInfo.html?id=${id}`}>
      <div className="cardLink mx-1 bg-black/[.25] border border-gray-600">
        <div className="relative">
          <img className="w-72 h-52 object-scale-down"
            src={getImageUrl(images?.[0])}
            alt={polishName} />
        </div>
        <div className="text-xl w-72 text-white bottom-0 left-0 mb-1">
          <h1 className="text-center ml-6 mr-6 font-medium">{polishName}</h1>
        </div>
      </div>
    </Link>
  );
}
