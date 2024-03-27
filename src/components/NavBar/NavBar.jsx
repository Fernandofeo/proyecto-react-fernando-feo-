import { Link, useNavigate } from "react-router-dom"
import CardWidget from "../CardWidget/CardWidget"
import { useEffect, useState } from "react"
import {collection, getDocs, orderBy, query, limit  } from "firebase/firestore"
import { db } from "../../service/firebase/firebaseConfig"



const NavBar=() => { 
  const [categories ,setCategories] = useState([])
  const navigate= useNavigate()

  useEffect(() => {
    const categoriesCollection = query(collection(db, 'categories'), orderBy('order', 'asc'))
    
    getDocs(categoriesCollection)
        .then(querySnapshot => {
            const categoriesAdapted = querySnapshot.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setCategories(categoriesAdapted)
        })
        .catch(error => {
            console.error('error')
        })
}, [])

  return (
       <header> 
            <nav style={{ backgroundColor: 'black' ,  display: `flex`, justifyContent : `space-between` , alignItems : 'center'}}> 
               <Link to = '/'> 
                 <h3 onClick={() => navigate('/')} style={ { color: 'white  ',display:`flex`, fontSize: 15, textAlign:`center `}}> Distri Fer </h3>
               </Link>
             <div style={ {color : 'white', display :'flex', fontSize: 18, textAlign : `center` }} > 
               <Link to={'/category/chocolate'} style={{padding : 5, margin : 15}}> Chocolates</Link>               
               <Link to={'/category/cafe'} style={{padding : 5, margin: 15}}> Cafe  </Link>                  
               <Link to={'/category/budin'} style={ {padding : 5, margin: 15}} > Budin</Link>
              </div >
             <CardWidget/>
             </nav> 
        </header>
        )
}

export default NavBar
