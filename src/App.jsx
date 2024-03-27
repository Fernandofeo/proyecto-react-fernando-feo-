import { useState } from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components//ItemListConteiner/ItemListConteiner'
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner'
import { CartProvider } from './context/CartContext'
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout'



function App() {
 

  return (
   
    <div>
     <BrowserRouter >
        <CartProvider> 
          <NavBar/>
          <Routes > 
            <Route path='/' element= {<ItemListConteiner greeting ={ 'Bienvenidos a Distri Fer '} />} > </Route>
            <Route path='/category/:categoryId' element = {<ItemListConteiner greeting={ `Bienvenidos `}/>} />
            <Route path='/item/:itemId' element = { <ItemDetailContainer/> }></Route>
            <Route path='/cart' element ={<CartView/>}></Route>
            <Route path='/Checkout' element ={ <Checkout/>} > </Route>
           <Route path='* ' element= { <h1> 404 </h1>}></Route>
          </Routes>    
        </CartProvider>
      </BrowserRouter> 
   
   </div>
  )
}

export default App
