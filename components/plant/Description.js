export default function Description({description}) {
  return description && (
    <div className="max-w-6xl text-center p-10 text-white text-justify">{description}</div>
  );
}
