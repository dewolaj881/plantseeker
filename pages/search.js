import Card from '../components/Card'
import Form from '../components/Form'

export default function Home() {
  return (
    <div className="bg-main h-screen">
      <Form placeholder="Wyszukaj..."/>
      <div className="flex space-x-8">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}
