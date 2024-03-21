import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../contex/CartContext";



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
export default ItemDetail