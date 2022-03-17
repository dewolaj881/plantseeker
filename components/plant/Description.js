export default function Description({ description }) {
  return description && (
    <div className="max-w-6xl py-5 px-5 text-white text-justify">{description}</div>
  );
}
