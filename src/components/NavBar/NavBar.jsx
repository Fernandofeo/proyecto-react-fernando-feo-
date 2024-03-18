import { Link, useNavigate } from "react-router-dom"
import CardWidget from "../CardWidget/CardWidget"



const NavBar=() => { 
  const navigate= useNavigate()

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
