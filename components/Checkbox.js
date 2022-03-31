export default function Checkbox({changeHandler, checked = false}) {
  return <>
    <input type="checkbox" onChange={changeHandler} checked={checked}/>
  </>;
}