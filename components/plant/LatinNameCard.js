export default function LatinNameCard({latinName}) {
  return latinName && (
    <span className="font-light">{latinName}</span>
  );
}
