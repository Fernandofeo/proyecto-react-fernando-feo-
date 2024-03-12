import { useState,useEffect } from "react"
import { getProducts  } from "../../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListConteiner =( {greeting  } )=>{
    const [products , setProducts] = useState( [ ] )
    const {categoryId} = useParams ()

    
    useEffect( ( ) => {
        const asyncFunc = categoryId ? getPrdouctsByCategory : getProducts

        asyncFunc ( categoryId)
        .then( response => { 
            setProducts (response)
        })
        .catch( error => {
            console.log (error)
        })},   [categoryId] ) 

    return(
        <div> 
            <h1 style={ { textAlign:"center"}}> {greeting} </h1>
            <ItemList products = {products} />
        </div>

    
    )
}

export default ItemListConteiner