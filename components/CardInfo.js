import QRCode from "./QRCode";
import useUrl from "../utils/useUrl";
import {usePlant} from "../utils/useFetch";
import Loading from "./Loading";
import Error from "./Error";

export default function CardInfo({id}) {
  console.log(id);
  const url = useUrl();
  const {isLoading, data: plant = {}, error} = usePlant(id);
  const { description, englishName, family, img, latinName, origin, polishName, species } = plant;

  if (isLoading) {
    return <Loading/>
  }

  if (error) {
    return <Error/>
  }

  console.log(plant);

  return (
    <div className="h-content flex flex-wrap justify-between">
      <div className="p-10 ">
        <h1 className="text-3xl text-white pb-10"><b>{polishName}</b> <span>{latinName}</span></h1>
        <div className="flex space-x-4 flex-wrap">
          <img height={"500px"} width={"500px"} src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg" alt="" />
          <img height={"500px"} width={"500px"} src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg" alt="" />
          <img height={"500px"} width={"500px"} src="https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg" alt="" />
          <QRCode url={url} size="500"/>
        </div>
      </div>
      <div className="max-w-6xl text-center p-10 text-white text-justify">{description}</div>
    </div>
  )
}