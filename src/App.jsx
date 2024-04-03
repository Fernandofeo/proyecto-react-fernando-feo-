import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner'
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout'

function App() {
 

  return (
   
    <div>
     <BrowserRouter >
        <CartProvider> 
          <Navbar/>
          <Routes > 
            <Route path='/' element= {<ItemListContainer greeting ={ 'Bienvenidos a Distri Fer '} />} > </Route>
            <Route path='/category/:categoryId' element = {<ItemListContainer greeting={ `Bienvenidos `}/>} />
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
