import { Link } from "react-router-dom"
import CardWidget from "../CardWidget/CardWidget"



const NavBar=() => { 
    return (
       <header> 
            <nav style={{ backgroundColor: 'green' ,  display: `flex`, justifyContent : `space-between` , alignItems : 'center'}}> 
               <link to = '/'> 
                 <h3 style={ { color: 'red ',display:`flex`, fontSize: 15, textAlign:`center `}}> Distri Fer </h3>
               </link>
             <div style={ {color : 'yellow', display :'flex', fontSize: 5, textAlign : `center` }} > 
               <Link to={'/category/Chocolates'} > Chocolates</Link>
               <Link to={'/category/Cafe '} > Cafe  </Link>
               <Link to={'/category/Budin'} > Budin</Link>

                <button > Chocolates </button>
                <button> Cafe</button>
                <button> Budin  </button >
                <input class="w-full mx-auto justify-between flex my-auto py-3 cursor-text 
              bg-transparent border-b-2 border-white text-white text-xl focus:outline-none" placeholder="Buscar" type="text"></input>
             </div >
             <CardWidget/>
             </nav> 
        </header>
        )
}

export default NavBar
