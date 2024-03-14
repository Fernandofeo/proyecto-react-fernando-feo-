import { Link, NavLink } from "react-router-dom"
import CardWidget from "../CardWidget/CardWidget"



const NavBar=() => { 
    return (
       <header> 
            <nav style={{ backgroundColor: 'black' ,  display: `flex`, justifyContent : `space-between` , alignItems : 'center'}}> 
               <Link to = '/'> 
                 <h3 style={ { color: 'white  ',display:`flex`, fontSize: 15, textAlign:`center `}}> Distri Fer </h3>
               </Link>
             <div style={ {color : 'white', display :'flex', fontSize: 18, textAlign : `center` }} > 
               <NavLink to={'/category/chocolates'} style={{padding : 5, margin : 15}}> Chocolates</NavLink>               
               <NavLink to={'/category/cafe'} style={{padding : 5, margin: 15}}> Cafe  </NavLink>                  
               <NavLink to={'/category/budin'} style={ {padding : 5, margin: 15}} > Budin</NavLink>
              </div >
             <CardWidget/>
             </nav> 
        </header>
        )
}

export default NavBar
