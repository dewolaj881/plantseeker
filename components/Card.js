import Link from "next/link";

export default function Card({ plant = {} }) {
  const { description, englishName, family, id, img, latinName, origin, polishName, species } = plant; // Takie pola są w obecnym API, każde może być nullem, id jest liczbą, reszta string
  console.log(plant);
  return (
    <Link href={"/search/plant_" + plant.polishName}>
      <div className="cardLink">
        <div>
          <img className="w-72 h-56 rounded-2xl mx-4" src={img || 'https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg'} alt={polishName} />
          <div className="text-xl w-72 bg-transparent text-white font-bold minusMargin">
            <h1 className="text-center"><b>{/*polishName*/ "Magnolia"}</b> <span className="font-light">{"Magnolia L."}</span></h1>
          </div>
        </div>
      </div>
    </Link >
  )
}

// import Link from "next/link";

// export default function Card({ plant = {} }) {
//   const { description, englishName, family, id, img, latinName, origin, polishName, species } = plant; // Takie pola są w obecnym API, każde może być nullem, id jest liczbą, reszta string
//   console.log(plant);
//   return (
//     <Link href={"/search/plant_" + plant.id}>
//       <div className="cardLink">
//         <img className="w-56 h-42 rounded-t-sm" src={img || 'https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg'} alt={polishName} />
//         <div className="w-56 bg-secondary rounded-b-sm text-white p-4">
//           <h1 className="text-center"><b>{polishName}</b> {latinName && `(${latinName})`}</h1>
//           <p className="w-48 text-justify">{description}</p>
//           <div className="flex flex-col">
//             <h2 className="text-left bg-gray-600 w-max px-4 rounded-xl">{family || 'Nieznany'}</h2>
//           </div>
//         </div>
//       </div>
//     </Link >
//   )
// }