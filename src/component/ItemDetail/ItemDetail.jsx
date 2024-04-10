import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { useNotification } from '../../Notificacion/Hooks/useNotification';

const InputCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if (e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count} />
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div >
        <p>{count}</p>
        <div >
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button onClick={increment}>+</button>
        </div>
    </div>
    

    )
}

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
    const ItemCount = stock === 0 ? InputCount : ButtonCount;
    const { addItem, isInCart } = useContext(CartContext);
    const { showNotification } = useNotification();

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        console.log(objProductToAdd);
        showNotification('success', `Se agregó correctamente ${quantity} ${name}`);
        addItem(objProductToAdd);
    }

    return (
        <article >
            <header >
                <h2 >
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name}  />
            </picture>
            <section>
                <p >
                    Categoría: {category}
                </p>
                <p >
                    Descripción: {description}
                </p>
                <p >
                    Precio: ${price}
                </p>
            </section>
            <footer >
                {
                    !isInCart(id) ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    ) : (
                        <>
                            <div >
                                <Link to='/' >Seguir comprando</Link>
                            </div>
                            <div >
                                <Link to='/cart'>Finalizar compra</Link>
                            </div>
                        </>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail;


