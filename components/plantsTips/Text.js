export default function Text({h1, p}) {
  return (
    <div>
      <h1 className="tabHeader">{h1}</h1>
      <p className="tabParagraph">{p}</p>
    </div>
  );
}
