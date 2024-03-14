import { useState } from "react" 


const ItemCount = ({initial = 1, stock, onAdd}) =>{
    const [ quantity , setQuantity]= useState ( initial )

const increment = () => {
    if (quantity < stock){ 
        setQuantity ( prev => prev + 1)
    }
}

const decrement = () => {
    if ( quantity > 0){
        setQuantity ( prev => prev - 1 )
    }
}
return ( 
    <div >
        <div>
            <button  onClick={decrement}> - </button>
            <h4 >  {quantity}  </h4>
            <button  onClick={increment}> + </button>
        </div>
        <div>
            <button  onClick ={() => onAdd ( quantity)} disabled={!stock} >Agregar al carrito  </button>
        </div>
    </div>
)
}


export default ItemCount