import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Bienvenido a nuestra tienda online, aqui encontraras una gran cantidad de productos y servicios de calidad!" />
    </>
  )
}

export default App
