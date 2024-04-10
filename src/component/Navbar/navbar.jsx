import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link, useNavigate } from 'react-router-dom'; 
import { useEffect, useState } from 'react';
import { db } from '../../service/firebase/firebaseConfig';
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore'

const Navbar = () => {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate(); 

  useEffect(() => {
    const categoriesCollection = query(collection(db, 'categories'), orderBy('order'));
    getDocs(categoriesCollection)
      .then(querySnapshot => {
        const categoriesAdapted = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setCategories(categoriesAdapted);
      })
      .catch(error => {
        console.error('error');
      });
  }, []);

  return (
    <header > 
             <div style={ {display :'flex', fontSize: 18, textAlign : `center` , background: "red ", padding : 15  , justifyContent:"space-between" , alignContent :"center"}} > 
              <Link to = '/'> 
                <h3 onClick={() => navigate('/')} style={ { color: 'green   ',display:`flex`, fontSize: 25, textAlign:`center `}}> Distri Fer </h3>
              </Link>            
               <Link to={'/category/chocolate'} style={{padding : 5, margin : 15}}> Chocolates</Link>               
               <Link to={'/category/cafe'} style={{padding : 5, margin: 15}}> Cafe  </Link>                  
               <Link to={'/category/budin'} style={ {padding : 5, margin: 15}} > Budin</Link>
               <CartWidget />
              </div >
    </header> 
  );
};

export default Navbar;




