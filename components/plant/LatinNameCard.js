export default function LatinNameCard({latinName}) {
  return latinName && (
    <i className="font-light">{latinName}</i>
  );
}
