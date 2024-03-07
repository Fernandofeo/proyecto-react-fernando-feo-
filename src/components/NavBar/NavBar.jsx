import { NavLink } from "react-router-dom"
import tailwindConfig from "../../../tailwind.config"

//import classes from './NavBar.module.css '
import CardWidget from "../CardWidget/CardWidget"



const NavBar=() => { 
    return (
       <header> 
            <nav style={{ backgroundColor: 'green'}}> 
               <link to = '/'> 
                 <h3 style={ { color: 'red ',display:`flex`, fontSize: 15, textAlign:`center `}}> Distri Fer </h3>
               </link>
             <div style={ {color : 'yellow', display :'flex', fontSize: 5, textAlign : `center` }} > 
               <NavLink to={'/category/Chocolates'} className={({isActive}) => isActive ? 'ActiveOption' : `Option `}> Chocolates</NavLink>
               <NavLink to={'/category/Cafe '} className={({isActive}) => isActive ? 'ActiveOption' : `Option `}> Cafe  </NavLink>
               <NavLink to={'/category/Budin'} className={({isActive}) => isActive ? 'ActiveOption' : `Option `}> Budin</NavLink>

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

