import Text from "./Text"

export default function Tab(props) {
  return (
    <div className={"tab w-24 " + props.backgroundColor}>
      <img height="150px" width="150px" className="p-8" src={props.img} alt={props.alt} />
      <Text h1={props.h1} p={props.p}></Text>
    </div>
  )
}