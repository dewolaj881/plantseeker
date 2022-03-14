export default function Text(props) {
  return (
    <>
      <div>
        <h1 className="tabHeader">{props.h1}</h1>
        <p className="tabParagraph">{props.p}</p>
      </div>
    </>
  )
}