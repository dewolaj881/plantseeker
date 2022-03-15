import getImageUrl from '../utils/getImageUrl.js';
import PlantImage from './PlantImage.js';
import QRCode from './QRCode';
import useUrl from '../utils/useUrl';
import {usePlant} from '../utils/useApi.js';
import Loading from './Loading';
import Error from './Error';

export default function CardInfo({id}) {
  const url = useUrl();
  const {isLoading, data: plant = {}, error} = usePlant(id);

  if (isLoading) {
    return <Loading/>;
  }

  if (error) {
    return <Error/>;
  }

  const {
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
    origin
  } = plant; // To wszystko jest w API i wszystko może być nullem!

  console.log(plant);

  return (
    <div className="h-content flex flex-wrap justify-between">
      <div className="p-10 ">
        <h1 className="text-3xl text-white pb-10"><b>{polishName}</b> <span>{latinName}</span></h1>
        <div className="flex space-x-4 flex-wrap">
          {(images || []).map((image) => <PlantImage key={image.img_name} src={getImageUrl(image)} alt={polishName}/>)}
          <QRCode url={url} size="500"/>
        </div>
      </div>
      <div className="max-w-6xl text-center p-10 text-white text-justify">{description}</div>
    </div>
  );
}
