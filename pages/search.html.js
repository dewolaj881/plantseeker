import Head from 'next/head.js';
import HeadTitle from '../components/HeadTitle.js';
import Input from '../components/Input.js';
import Nav from '../components/Nav.js';
import Search from '../components/Search.js';
import {useState} from 'react';

export default function Home() {
  const [value, setValue] = useState('');

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <HeadTitle title="Wyszukaj"/>
      <div className="bg-main h-content lg:h-screen">
        <Nav current="Wyszukaj"/>
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
          <Input changeHandler={changeHandler} value={value} placeholder="Wyszukaj..."/>
        </div>
        <Search value={value}/>
      </div>
    </>
  );
}
