import Tab from '../components/plantsTips/Tab'
import Nav from '../components/plantsTips/LazyNav'

export default function Home() {
  return (
    <div className="h-screen bg-secondary">
      <Nav></Nav>
      <div className="flex justify-center space-x-0 flex-col lg:flex-row lg:space-x-10 margines">
        <Tab backgroundColor={"bg-gray-100"} img={"/plants/img/tabs/plant.png"} alt={"witam"} h1={"Podlewanie kwiatów herbatą"} p={"Paprotka podlewana herbatą szybko rośnie i ma piękny, ciemnozielony kolor. Jako nawóz do kwiatów sprawdzą się także fusy z herbaty."} />
        <Tab backgroundColor={"bg-gray-100"} img={"/plants/img/tabs/plant2.png"} alt={"witam"} h1={"Podlewanie kwiatów herbatą"} p={"Paprotka podlewana herbatą szybko rośnie i ma piękny, ciemnozielony kolor. Jako nawóz do kwiatów sprawdzą się także fusy z herbaty."} />
        <Tab backgroundColor={"bg-gray-100"} img={"/plants/img/tabs/plant3.png"} alt={"witam"} h1={"Podlewanie kwiatów herbatą"} p={"Paprotka podlewana herbatą szybko rośnie i ma piękny, ciemnozielony kolor. Jako nawóz do kwiatów sprawdzą się także fusy z herbaty."} />
        <Tab backgroundColor={"bg-gray-100"} img={"/plants/img/tabs/plant4.png"} alt={"witam"} h1={"Podlewanie kwiatów herbatą"} p={"Paprotka podlewana herbatą szybko rośnie i ma piękny, ciemnozielony kolor. Jako nawóz do kwiatów sprawdzą się także fusy z herbaty."} />
      </div>
      <div className="flex justify-center space-x-0 flex-col lg:flex-row lg:space-x-10 margines2">
        <Tab backgroundColor={"bg-gray-100"} img={"/plants/img/tabs/plant5.png"} alt={"witam"} h1={"Podlewanie kwiatów herbatą"} p={"Paprotka podlewana herbatą szybko rośnie i ma piękny, ciemnozielony kolor. Jako nawóz do kwiatów sprawdzą się także fusy z herbaty."} />
        <Tab backgroundColor={"bg-gray-100"} img={"/plants/img/tabs/plant6.png"} alt={"witam"} h1={"Podlewanie kwiatów herbatą"} p={"Paprotka podlewana herbatą szybko rośnie i ma piękny, ciemnozielony kolor. Jako nawóz do kwiatów sprawdzą się także fusy z herbaty."} />
        <Tab backgroundColor={"bg-gray-100"} img={"/plants/img/tabs/plant7.png"} alt={"witam"} h1={"Podlewanie kwiatów herbatą"} p={"Paprotka podlewana herbatą szybko rośnie i ma piękny, ciemnozielony kolor. Jako nawóz do kwiatów sprawdzą się także fusy z herbaty."} />
        <Tab backgroundColor={"bg-gray-100"} img={"/plants/img/tabs/plant8.png"} alt={"witam"} h1={"Podlewanie kwiatów herbatą"} p={"Paprotka podlewana herbatą szybko rośnie i ma piękny, ciemnozielony kolor. Jako nawóz do kwiatów sprawdzą się także fusy z herbaty."} />
      </div>
    </div>
  )
}
