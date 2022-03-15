import { useSearchPlants } from '../utils/useFetch.js';
import Card from './Card.js';
import Error from "./Error";
import Loading from "./Loading";

export default function Search({ value }) {
  const { isLoading, data = [], error } = useSearchPlants(value);

  if (isLoading) {
    return <Loading/>
  }

  if (error) {
    return <Error/>
  }

  return (
    <div className="flex flex-wrap p-10 justify-center">
      {data.map((plant) => <Card key={plant.id} plant={plant} />)}
    </div>
  );
}
