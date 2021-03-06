import {SearchIcon} from '@heroicons/react/outline';

export default function Input({placeholder, changeHandler, value}) {
  return (
    <div className="flex items-center justify-center bg-white inputSearch">
      <SearchIcon className="w-10 h-10 p-2 bg-white rounded-xl"/>
      <input className="inputSearch rounded-xl" placeholder={placeholder} type="text" onChange={changeHandler}
             value={value}/>
    </div>
  );
}
