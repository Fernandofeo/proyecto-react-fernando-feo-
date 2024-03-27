import { createContext , useState } from "react";


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
/*
export const CartContext = createContext({
    cart : []
})

export const CartProvider = ({ children }) => {
    const [ cart , setCart] = useState ([])

    const addItem = (item, quantity) => { 
        if ( ! isInCart (item.id)){ 
            setCart ( prev => [...prev , {...item ,  quantity}])
        } else {
            console.log (`producto ya agregado `)
        }
    }

    const removeItem = ( itemId) => {
        const cartUpdated = cart.filter ( prod => prod.id !== itemId)
        setCart (cartUpdated)
    }

    const clearCart = () => { 
        setCart ([])
    }

    const isInCart = (itemId) => { 
        return cart.some (prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value= {{ cart , addItem , removeItem , clearCart  } }>
            { children }
        </CartContext.Provider>
    )

}*/