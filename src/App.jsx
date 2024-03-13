import { useState } from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner'
import ItemCount from './components/ItemCount/ItemCount'




function App() {
  const [count, setCount] = useState( )

  return (
   
    <div>
     <BrowserRouter>
        <NavBar/>
        <Routes> 
          <Route path='/' element= {<ItemListConteiner greeting ={ 'Bienvenidos a Distri Fer '} />} > </Route>
          <Route path='/category/:categoryId' element = {<ItemListConteiner greeting={ `producto de la categoria`}/>} ></Route>
          <Route path='/Item/:ItemId' element = { <ItemDetailContainer/> }></Route>
          <Route path='* ' element= { <h1> 404 </h1>}></Route>
        </Routes>      
      </BrowserRouter> 
   </div>
  )
}

export default App
