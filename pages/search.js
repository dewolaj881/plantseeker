import { QueryClient, QueryClientProvider } from 'react-query';
import Input from '../components/Input.js';
import Search from '../components/Search.js';
import { useState } from 'react';

const queryClient = new QueryClient();

export default function Home() {
  const [value, setValue] = useState('');

  const changeHandler = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="bg-main h-content lg:h-screen">
      <div className="py-16">
        <a className="flex justify-center items-center" href="/plants">
          <img
            className="block h-8 w-auto mx-2"
            src="/plants/img/leaf.png"
            alt="PlantSeeker logo"
          />
          <h1 className="text-4xl text-white text-center font-light">PlantSeeker</h1>
        </a>
      </div>

      <div className="flex justify-center">
        <Input changeHandler={changeHandler} value={value} placeholder="Wyszukaj..." />
      </div>
      <QueryClientProvider client={queryClient}>
        <Search value={value} />
      </QueryClientProvider>
    </div>
  )
}
