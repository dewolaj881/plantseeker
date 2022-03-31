import HeadTitle from '../components/HeadTitle.js';
import Input from '../components/Input.js';
import Nav from '../components/Nav.js';
import Search from '../components/Search.js';
import {useState} from 'react';
import Checkbox from "../components/Checkbox";

export default function Home() {
  const [value, setValue] = useState('');
  const [doniczkowe, setDoniczkowe] = useState(true);
  const [ogrodowe, setOgrodowe] = useState(true);

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const doniczkoweHandler = (event) => {
    setDoniczkowe(event.target.checked);
  };

  const ogrodoweHandler = (event) => {
    setOgrodowe(event.target.checked);
  };

  return (
    <>
      <HeadTitle title="Wyszukaj"/>
      <div className="h-content lg:h-screen">
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
          Doniczkowe
          <Checkbox changeHandler={doniczkoweHandler} checked={doniczkowe}/>
          Ogrodowe
          <Checkbox changeHandler={ogrodoweHandler} checked={ogrodowe}/>
        </div>
        <Search value={value} doniczkowe={doniczkowe} ogrodowe={ogrodowe}/>
      </div>
    </>
  );
}
