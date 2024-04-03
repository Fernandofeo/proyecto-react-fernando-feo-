import { useState, createContext } from "react"


export const CartContext = createContext();

export const CartProvider =({children})=> {

    const [cart, setCart] = useState([])

  
    const addItem = (productToAdd) => {

      
      if(!isInCart(productToAdd.id)){
        setCart(prev => [... prev, productToAdd])
      }else{
        alert("el producto ya está en el carrito")
      }
    }
    
  
    const isInCart =(id) => {
      return cart.some(prod => prod.id ===id)
    }

    const eraseCart = () => {
      setCart([])
    }
  
    const eraseItem = (id) => {
      const updatedCart = cart.filter(prod => prod.id !== id)
      setCart(updatedCart)
    }


    const getTotalQuantity = () => {
  
      let quantityAccumulator = 0
  
      cart.forEach(prod=>{
        quantityAccumulator += prod.quantity
      })
  
      return quantityAccumulator
    }
  
    const totalQuantity = getTotalQuantity();

    
    const getTotalPrice = () => {
      let totalPriceAccumulator = 0
      
      cart.forEach(prod => {
        totalPriceAccumulator += prod.quantity * prod.price
      })

      return totalPriceAccumulator

    }

    const totalPrice = getTotalPrice();



   return (

    <CartContext.Provider value={{cart, addItem, totalQuantity, eraseCart, eraseItem, totalPrice, isInCart}}>
        {children}
    </CartContext.Provider>
   ) 
}

/*import { createContext , useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log('CART: ', cart)
  
    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart(prev => [...prev, productToAdd])
      } else {
        console.error('El producto ya esta agregado')
      }
    }
  
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }
  
    const getTotalQuantity = () => {
      let acumulador = 0
  
      cart.forEach(prod => {
        acumulador += prod.quantity
      })
  
      return acumulador
    }
  
    const totalQuantity = getTotalQuantity()

    return (
        <CartContext.Provider value={{cart, addItem, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
*/