import { Link } from "react-router-dom"

const Item = ( { id, name, img , price, stock } ) => { 
    return ( 
        <article key={id}>
            <header>
                <h2> { name} </h2>
            </header>
            <picture> 
                <img src={img} style={{ width: 100}} alt= {name}/>
            </picture>
            <section> 
                <p>
                    Precio : ${price}
                </p>
                <p>
                    Stock disponible : {stock}
                </p>
            </section>
            <footer> 
               <Link to={ `/Item/${id}`}  > Ver detalle   </Link>
            </footer>
        </article>
    )
}

export default Item