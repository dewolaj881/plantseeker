import {QueryClient, QueryClientProvider} from 'react-query';
import Input from '../components/Input.js';
import Search from '../components/Search.js';
import {useState} from 'react';

const queryClient = new QueryClient();

export default function Home() {
  const [value, setValue] = useState('');

  const changeHandler = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="bg-main h-screen">
      <Input changeHandler={changeHandler} value={value} placeholder="Wyszukaj..."/>
      <QueryClientProvider client={queryClient}>
        <Search value={value}/>
      </QueryClientProvider>
    </div>
  )
}
