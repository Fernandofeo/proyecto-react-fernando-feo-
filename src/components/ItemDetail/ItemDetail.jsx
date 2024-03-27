import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

/*import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useNotification } from '../../notification/hooks/useNotification'
*/
const InputCount = ({ onAdd, stock, initial= 1 }) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
            setCount(count - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}


const ItemDetail = ({ id, name, category, img, price, stock, description}) => {

    const [inputType, setInputType] = useState('button')

    const [quantity, setQuantity] = useState(0)

    const ItemCount = inputType === 'input' ? InputCount : ButtonCount

    const { addItem } = useContext(CartContext)

    //const { showNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        console.log(objProductToAdd)
        showNotification('success', `Se agrego correctamente ${quantity} ${name}`)
        setQuantity(quantity)

        addItem(objProductToAdd)
    }

    return (
        <article>
            <button onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
                Cambiar contador
            </button>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width: 100}}/>
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>           
            <footer>
                {
                    quantity === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock}/>
                    ) : (
                        <>
                            <Link to='/cart'>Finalizar compra</Link>
                        </>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail
/*
const ItemDetail =({ id , name , img , category , description , price , stock}) => {
    const [ quantityAdded, setQuantityAdded] = useState (0)
    const {addItem} = useContext (CartContext)
    
    const handdleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = { id ,name,price }

        addItem(item, quantity)
    }
    return( 
        <article style={ {display : `grid `, textAlign : `center`, backgroundColor : ``}} >
            <header >
                <h2> {name} </h2>
            </header>
            <picture>
                <img src= {img} alt={name} style={ {maxWidth : 100}}/>
            </picture>
            <section >
                <p> Categoria : {category}  </p>
                <p> Descripcion : {description} </p>
                <p> Precio : { price}   </p>
                <p>Disponible: {stock} </p>
            </section>
            <footer>
              {  
                    quantityAdded >0 ? (
                      <Link to= '/cart' > Terminar compra </Link>
                    ) : ( 
                   <ItemCount initial={1} stock= {stock} onAdd={handdleOnAdd }/>
                    )
                }

                
            </footer>
        </article>
    )
}
export default ItemDetail*/