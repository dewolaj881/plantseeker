export default function Card({plant = {}}) {
  const {description, englishName, family, id, img, latinName, origin, polishName, species} = plant; // Takie pola są w obecnym API, każde może być nullem
  console.log(plant);
  return (
    <div>
      <img className="w-56 h-42 rounded-t-sm" src={img || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'} alt={polishName}/>
      <div className="w-56 bg-secondary rounded-b-sm text-white p-4">
        <h1 className="text-center"><b>{polishName}</b>({latinName})</h1>
        <p className="w-48 text-justify">{description}</p>
        <div className="flex flex-col">
          <h2 className="text-left bg-gray-600 w-max px-4 rounded-xl">{family || 'Nieznany'}</h2>
        </div>
      </div>
    </div>
  )
}
