import Cart from './assest/pngwing.com.png'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        
        <Link to={'/cart'}>
            <img width='30px' height='30px' src={Cart} />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget