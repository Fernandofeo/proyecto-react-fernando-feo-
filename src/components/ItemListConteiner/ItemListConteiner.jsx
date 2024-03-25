import { useState,useEffect } from "react"
//import { getProducts , getProductsByCategory } from "../../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, QuerySnapshot } from "firebase/firestore"
import { db } from "../../service/firebase/firebaseConfig"

const ItemListConteiner =( {greeting  } )=>{
    const [products , setProducts] = useState( [ ] )
    const {categoryId} = useParams ()
     
    useEffect(() => {
        const productsCollection =  collection (db , `products`)
        getDocs (productsCollection) 
            .then(QuerySnapshot => {
                const productsAdapted = QuerySnapshot.docs.map(doc=>{
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                console.log(productsAdapted)
            })
            .catch()

        /*onst asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(result => {
                setProducts(result)
            })
            .catch(error => {
                console.log(error)
            })*/
},   [categoryId] ) 

    return(
        <div> 
            <h1 style={ { textAlign:"center"}}> {greeting} </h1>
            <ItemList products = {products } />
        </div>

    
    )
}

export default ItemListConteiner