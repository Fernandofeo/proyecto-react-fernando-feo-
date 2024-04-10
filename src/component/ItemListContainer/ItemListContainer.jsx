import { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { useNotification } from "../../Notificacion/Hooks/useNotification";
import { db } from '../../service/firebase/firebaseConfig'
import { getDocs, collection, query, where } from 'firebase/firestore';

const ItemListMemoized = memo(ItemList)

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);

    const [render, setRender] = useState(false)

    const { category: categoryId } = useParams();

    const { showNotification } = useNotification()
    useEffect(() => {
        setTimeout(() => {
            setRender(prev => !prev)
        }, 2000)
    }, [])

    useEffect(() => {
        const productsCollection = categoryId ? (
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : (
            collection(db, 'products')
        )

        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProducts(productsAdapted);
            })
            .catch(error => {
                console.error('Error obteniendo documentos:', error);
            });
    }, [categoryId]);


    return (
        <div >

            <h1 style={{ color: 'red', fontFamily: 'helvetica', fontWeight: 'bold', margin: 10, fontSize: 45, display: 'flex', justifyContent: 'center', textShadow: '2px 2px 5px' }}>{greeting}</h1>

            <div >
                <ItemListMemoized products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer

