import { useContext } from "react";
import { CartContext } from "../../contex/CartContext";
import CartItem from "/CartItem/CartItem"
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart , clearCart , totalQuantity , total } = useContext ( CartContext)

    if ( totalQuantity === 0) {
        return (
            <div>
                <h1> No hay productos en el carrito</h1>
                <Link to= '/' > Productos </Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map ( p=> <CartItem key= {p.id} {...p}/> )}
            <h3> total : ${total} </h3>
            <button onClick={ ()=> clearCart()} > Borrar carrito </button>
            <Link to='/checkout' > Pagar </Link>
        </div>
    )
}