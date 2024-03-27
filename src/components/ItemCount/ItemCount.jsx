import { useState } from "react" 

const ItemCount = ({ initialValue = 1, stock, onAdd}) => {
    const [count, setCount] = useState(initialValue)


    const decrement = () => {
        if(count > 1) {
            setCount(count => count - 1)
        }
    }
    
    const increment = () => {
        if(count < stock) {
            setCount(prev => prev + 1)
        }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}

export default ItemCount


/*const ItemCount = ({initial = 1, stock, onAdd}) =>{
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
        <div >
            <h4 >  {quantity}  </h4>
            <button  onClick={decrement}   > - </button>
            <button  onClick={increment}> + </button>
            <button  onClick ={() => onAdd ( quantity)} disabled={!stock} >Agregar al carrito  </button>
        </div>
    </div>
)
}


export default ItemCount*/