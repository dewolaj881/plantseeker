export default function Card() {
  return (
    <div>
      <img className="w-56 h-42 rounded-t-sm" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Drosera_rotundifolia_Rosiczka_okr%C4%85g%C5%82olistna_2018-06-10_02.jpg/1280px-Drosera_rotundifolia_Rosiczka_okr%C4%85g%C5%82olistna_2018-06-10_02.jpg" alt=""/>
      <div className="w-56 bg-secondary rounded-b-sm text-white p-4">
        <h1 className="text-center"><b>Rosiczka</b>(Drosera rotundifolia)</h1>
        <p className="w-48 text-justify">Rośliny tego rodzaju są uprawiane jako ciekawostki botaniczne, wykorzystywane jako lecznicze, a niektóre australijskie gatunki mające spichrzowe organy podziemne spożywane przez aborygenów.</p>
        <div className="flex flex-col">
          <h2 className="text-left bg-gray-600 w-max px-4 rounded-xl">Goździkowate</h2>
          <h2 className="text-left bg-gray-600 w-max px-4 rounded-xl">Rosiczkowate</h2>
          <h2 className="text-left bg-gray-600 w-max px-4 rounded-xl">Okrytonasienne</h2>
        </div>
      </div>
    </div>
  )
 
}