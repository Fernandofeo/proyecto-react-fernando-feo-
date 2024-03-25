import { useContext } from 'react'
import Cart from './assets/Cart.png'
import { CartContext } from '../../contex/CartContext'
import { Link } from 'react-router-dom'



const CardWidget =()=>{
    const {totalQuantity} = useContext (CartContext)
    return (
        <Link to= '/cart' style={ { display : totalQuantity > 0 ? 'block' : 'none'}} > 
            <img  src= {  Cart} alt="cart "style={{ display: 'flex', maxHeight:20, alignItems:`center`,justifyContent: 'center' }}/> 
            0
        </Link>
    )
}

export default CardWidget