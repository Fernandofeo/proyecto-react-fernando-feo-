import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import ItemCount from './components/ItemCount/ItemCount'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListConteiner greeting ={ 'Bienvenidos a Distri Fer '} />
      <ItemCount initial={0} stock={30} onAdd={(Quantity )=> console.log('Cantidad agregada ', Quantity)} />
      
    </>
  )
}

export default App
