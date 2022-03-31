import {useSearchPlants} from '../utils/useApi.js';
import useSearch from '../utils/useSearch.js';
import Card from './Card.js';
import Error from './Error';
import Loading from './Loading';

export default function Search({ value, doniczkowe, ogrodowe }) {
  const { isLoading, data = [], error } = useSearchPlants(value);
  useSearch(value);

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
    <div className="flex flex-wrap mt-10 sm:mt-none sm:p-10 justify-center gap-4">
      {(data || [])
        .filter(({plant_type}) => doniczkowe && plant_type === 'POTTED' ? true : ogrodowe && plant_type === 'GARDEN')
        .map((plant) => <Card key={plant.id} plant={plant} />)}
    </div>
  );
}
