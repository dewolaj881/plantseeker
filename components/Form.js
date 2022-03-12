import React, {useState} from 'react';
import Input from "./Input"

export default function Form({placeholder}) {
  const [value, setValue] = useState('');

  const changeHandler = (event) => {
    setValue(event.target.value)
  }

  return (
    <Input changeHandler={changeHandler} value={value} placeholder={placeholder} />
  )
}
