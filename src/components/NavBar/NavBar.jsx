//import classes from './NavBar.module.css '
import CardWidget from "../CardWidget/CardWidget"



const NavBar=() => { 
    return (
       <header> 
            <nav style={{ backgroundColor: 'green'}}> 
                 <h3 style={ { color: 'red ',display:`flex`, fontSize: 15, textAlign:`center `}}> Distri Fer </h3>
             <div style={ {color : 'yellow', display :'flex', fontSize: 5, textAlign : `center` }} > 
                <button > Chocolates </button>
                <button> Chicles </button>
                <button> Caramelos </button >
                <input class="w-full mx-auto justify-between flex my-auto py-3 cursor-text 
              bg-transparent border-b-2 border-white text-white text-xl focus:outline-none" placeholder="Buscar" type="text"></input>
             </div >
             <CardWidget/>
             </nav> 
        </header>
        )
}

export default NavBar
