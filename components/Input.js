export default function Input(props) {
  return (
    <input className="inputSearch" placeholder={props.placeholder} type="text" onChange={props.changeHandler} value={props.value} />
  )
}
