import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';

const CartView = () => {
    const { cart, removeItem } = useContext(CartContext);

    const calculateTotal = () => {
        let total = 0;
        cart.forEach(product => {
            total += product.quantity * product.price;
        });
        return total;
    };

    return (
        <div>
            <h1 >Carrito de Compras</h1>
            <section >
                {cart.map(product => (
                    <div key={product.id} >
                        <img src={product.img} alt={product.name}  />
                        <div>
                            <h2 >{product.name}</h2>
                            <p >Cantidad: {product.quantity}</p>
                            <p >Precio unitario: ${product.price}</p>
                            <button  onClick={() => removeItem(product.id)}>Eliminar</button>

                        </div>
                    </div>
                ))}
            </section>
            <div >
                <p>Total de la compra: ${calculateTotal()}</p>
            </div>
            <Link to="/Checkout" >Checkout</Link>
        </div>
    );
}

export default CartView;


