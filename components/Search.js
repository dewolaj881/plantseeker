import { useSearchPlants } from '../utils/useFetch.js';
import Card from './Card.js';

export default function Search({ value }) {
  const { isLoading, data = [], error } = useSearchPlants(value);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-56">
        <button type="button" className="text-white text-3xl flex justify-center" disabled>
          <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-10 w-10 mr-3" viewBox="0 0 24 24" fill='none' stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Ładowanie...
        </button>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center mt-56">
        <button type="button" className="text-white text-3xl flex justify-center" disabled>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3" viewBox="0 0 24 24" fill='none' stroke="currentColor" strokeWidth="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Wystąpił błąd podczas wczytywania bazy!
        </button>
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-wrap p-10 justify-center">
        {data.map((plant) => <Card key={plant.id} plant={plant} />)}
      </div>
    </>
  );
}
