import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListConteiner greeting ={ 'Bienvenidos a Distri Fer '} />
      
      
    </>
  )
}

export default App
