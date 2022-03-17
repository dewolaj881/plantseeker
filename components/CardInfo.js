import getImageUrl from '../utils/getImageUrl.js';
import HeadTitle from './HeadTitle.js';
import Description from './plant/Description.js';
import LatinNameCardInfo from './plant/LatinNameCardInfo.js';
import PlantImage from './PlantImage.js';
import QRCode from './QRCode';
import useUrl from '../utils/useUrl';
import { usePlant } from '../utils/useApi.js';
import Loading from './Loading';
import Error from './Error';
import { PrinterIcon } from '@heroicons/react/outline';

export default function CardInfo({ id }) {
  const url = useUrl();
  const { isLoading, data: plant = {}, error } = usePlant(id);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (!plant) {
    return <Error text="Nie znaleziono!" />;
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
    origin,
    published,
    username
  } = plant; // To wszystko jest w API i wszystko może być nullem!

  console.log(plant);
  return (
    <>
      <HeadTitle title={polishName} />
      <div className="h-content flex flex-col">
        <div>
          <div className="grid grid-cols-5 gap-2 justify-center m-2">
            {(images || []).map((image) => <PlantImage key={image.img_name} src={getImageUrl(image)} alt={polishName} />)}
          </div>
          <div className='text-white p-5'>
            <h1 className="text-3xl text-white"><b>{polishName}</b> <LatinNameCardInfo latinName={latinName} /></h1>
            <h2>Charakterystyka rośliny: { }</h2>
            <h2>Nazwa rodziny: {polishFamily} | {latinFamily}</h2>
            <h2>Dekoracyjność: {decorativeness}</h2>
            <h2>{plantUsage !== '' ? `Wykorzystanie: ${plantUsage}` : ""}</h2>
          </div>
        </div>
        <Description description={description} />
        <div className='text-white p-5 flex justify-center'>
          <a className='bg-gray-900 p-5 rounded-2xl hover:bg-gray-600 flex items-center' href="javascript:if(window.print)window.print()"><PrinterIcon className='h-5 w-5 mr-2' /> Wydrukuj kod QR</a>
          <div className='myDivToPrint hidden' media="print">
            <QRCode className="test" url={url} size="512" />
          </div>
        </div>
      </div>
    </>
  );
}
