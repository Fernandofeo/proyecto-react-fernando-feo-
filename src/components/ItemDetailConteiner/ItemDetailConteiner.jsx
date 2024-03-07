import { useState , useEffect } from "react";
import { getProductsById } from "../../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [ product , setProduct] = useState (null)
    const { itemId } = useParams ()
    
    useEffect (() => {
        getProductsById ( itemId)
        .then( Response =>{
            setProduct ( Response)
        })
        .catch ( error => { 
            console.log ( error)
        })
    }, [ itemId ])

    return ( 
        <div> 
            <itemDetail { ...product}/> 
        </div>
    )
}

export default ItemDetailContainer