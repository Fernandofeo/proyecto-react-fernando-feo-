//import classes from './NavBar.module.css '
import CardWidget from "../CardWidget/CardWidget"



const NavBar=() => { 
    return (
       <header> 
            <nav> 
                 <h3 style={ { color: 'green', fontSize: 15}}> Distri Fer </h3>
             <div style={ {color : 'yellow', display :`flex`, fontSize: 10, textAlign : `center` }} > 
                <button > Chocolates </button>
                <button> Chicles </button>
                <button> Caramelos </button >
                <input class="w-full mx-auto justify-between flex my-auto py-3 cursor-text 
              bg-transparent border-b-2 border-white text-white text-xl focus:outline-none" placeholder="Buscar" type="text"></input>
             </div>
             <CardWidget/>
             </nav> 
        </header>
        )
}

export default NavBar

