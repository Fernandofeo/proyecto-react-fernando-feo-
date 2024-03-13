import { useState , useEffect } from "react";
import { getProductsById } from "../../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [ product , setProduct] = useState (null)
    const { ItemId } = useParams ()
    
    useEffect (() => {
        getProductsById ( ItemId)
        .then( Response =>{
            setProduct ( Response)
        })
        .catch ( error => { 
            console.log ( error)
        })
    }, [ ItemId ])

    return ( 
        <div> 
            <ItemDetail { ...product}/> 
        </div>
    )
}

export default ItemDetailContainer