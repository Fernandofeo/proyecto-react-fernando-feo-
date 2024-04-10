import './App.css';
import Navbar from './component/Navbar/navbar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer/ItemdetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import { CartProvider } from './Context/CartContext';
import { NotificationProvider } from './Notificacion/NotificationService'
import CartView from './component/CartView/CartView'
import Checkout from './component/Checkout/Checkout';



const App = () => {


  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Bienvenido a Distri Fer ' />} />
              <Route path='/category/:category' element={<ItemListContainer greeting='Productos de la Categoria' />} />
              <Route path='/itemId/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartView/>}/>
              <Route path='/Checkout' element ={<Checkout/>}/>
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>

    </>
  );
}

export default App

