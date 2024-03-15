import { useState,useEffect } from "react"
import { getProducts , getProductsByCategory } from "../../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListConteiner =( {greeting  } )=>{
    const [products , setProducts] = useState( [ ] )
    const {categoryId} = useParams ()
     
    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(result => {
                setProducts(result)
            })
            .catch(error => {
                console.log(error)
            })
},   [categoryId] ) 

    return(
        <div> 
            <h1 style={ { textAlign:"center"}}> {greeting} </h1>
            <ItemList products = {products } />
        </div>

    
    )
}

export default ItemListConteiner