import {useSearchPlants} from '../utils/useFetch.js';
import Card from './Card.js';

export default function Search({value}) {
  const {isLoading, data = [], error} = useSearchPlants(value);

  if (isLoading) {
    return (
      <div>Jakieś ładne ładowanie</div> // TODO Jakieś ładne ładowanie
    )
  }

  if (error) {
    return (
      <div>Wystąpił błąd!</div> // TODO Wystąpił błąd!
    )
  }

  return (
    <>
      <div className="flex space-x-8">
        {data.map((plant) => <Card key={plant.id} plant={plant}/>)}
      </div>
    </>
  );
}
