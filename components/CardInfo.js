import getImageUrl from '../utils/getImageUrl.js';
import HeadTitle from './HeadTitle.js';
import Description from './plant/Description.js';
import LatinNameCardInfo from './plant/LatinNameCardInfo.js';
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

  if (!plant) {
    return <Error text="Nie znaleziono!"/>;
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
      <HeadTitle title={polishName}/>
      <div className="h-content flex flex-col">
        <div className="p-10">
          <div className="flex flex-wrap">
            {(images || []).map((image) => <PlantImage key={image.img_name} src={getImageUrl(image)} alt={polishName}/>)}
          </div>
          <h1 className="text-3xl text-white pt-10"><b>{polishName}</b> <LatinNameCardInfo latinName={latinName}/></h1>
        </div>
        <Description description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin mollis tortor, et fermentum orci vestibulum sed. Nulla egestas vehicula sem, sit amet mattis nulla. Suspendisse ut sapien vel massa mollis gravida at in lorem. Nam et lobortis nunc, dapibus posuere ex. Donec sit amet mattis tortor. Donec imperdiet fermentum elit non feugiat. Praesent eget odio at elit tempor euismod tempor at nisl. Vestibulum ac vestibulum dui, eget bibendum lorem. Cras pretium, augue sit amet ultrices hendrerit, orci mi vehicula mauris, vel luctus purus nunc nec lectus. Integer hendrerit sit amet nunc a eleifend. Proin ac blandit augue. Duis sodales nisl vitae diam sodales auctor et a quam. Praesent sem sem, cursus vel faucibus at, pharetra eu turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}/>
        <div className="mt-24 text-white">
          <h2>Drukuj kod QR</h2>
          <QRCode url={url} size="512"/>
        </div>
      </div>
    </>
  );
}
