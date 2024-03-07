import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner'
import ItemCount from './components/ItemCount/ItemCount'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(5 )

  return (
    <>
    
     <BrowserRouter>
      <NavBar/>
      <ItemListConteiner greeting ={ 'Bienvenidos a Distri Fer '} />
      <ItemDetailConteiner/> 
      <ItemCount initial={0} stock={30} onAdd={(Quantity )=> console.log('Cantidad agregada ', Quantity)} /> 
      <Routes> 
        <Route path='/' element= { <ItemListConteiner/> } > </Route>
        <Route path='/category/:categoryId' element = {<ItemListConteiner/>} ></Route>
        <Route path='/item/:itemId' element = { <ItemListConteiner/> }></Route>
        <Route path='* ' element= { <h1> 404 </h1>}></Route>
      </Routes>      
      </BrowserRouter> 
    </>
  )
}

export default App
