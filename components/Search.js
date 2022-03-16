import { useAllPlants } from '../utils/useApi.js';
import Card from './Card.js';
import Error from './Error';
import Loading from './Loading';

export default function Search({ value }) {
  const { isLoading, data = [], error } = useAllPlants(value);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (data.length === 0) {
    return <Error text="Nie znaleziono!" />;
  }

  return (
    <div className="flex flex-wrap mt-10 sm:mt-none sm:p-10 justify-center">
      {(data || []).map((plant) => <Card key={plant.id} plant={plant} />)}
    </div>
  );
}
