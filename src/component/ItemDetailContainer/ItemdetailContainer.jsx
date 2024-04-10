import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {getDoc, doc, QueryDocumentSnapshot} from 'firebase/firestore'
import {db} from '../../service/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const productDoc = doc (db, 'products', itemId)
        getDoc(productDoc)
        .then (QueryDocumentSnapshot=>{
            console.log (QueryDocumentSnapshot)
            const data= QueryDocumentSnapshot.data()
            const productAdapted={id:QueryDocumentSnapshot.id,...data}
            setProduct(productAdapted)
        })
    }, [itemId]);

    return (
        <main>
            <h1 style={{ color: 'red ', fontFamily: 'helvetica', }} >Detalle del Producto</h1>
            <ItemDetail {...product} />
        </main>
    );
};

export default ItemDetailContainer;

