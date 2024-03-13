import { Link } from "react-router-dom"
import CardWidget from "../CardWidget/CardWidget"



const NavBar=() => { 
    return (
       <header> 
            <nav style={{ backgroundColor: 'green' ,  display: `flex`, justifyContent : `space-between` , alignItems : 'center'}}> 
               <Link to = '/'> 
                 <h3 style={ { color: 'red ',display:`flex`, fontSize: 15, textAlign:`center `}}> Distri Fer </h3>
               </Link>
             <div style={ {color : 'yellow', display :'flex', fontSize: 18, textAlign : `center` }} > 
               <Link to={'/category/Chocolates'} style={{padding : 5 }}> Chocolates</Link>               
               <Link to={'/category/Cafe '} style={{padding : 5}}> Cafe  </Link>                  
               <Link to={'/category/Budin'} style={ {padding : 5 }} > Budin</Link>

             
                <input style={ {margin : 10 }} placeholder="Buscar" type="text"></input>
             </div >
             <CardWidget/>
             </nav> 
        </header>
        )
}

export default NavBar
