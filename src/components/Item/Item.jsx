import { Link } from "react-router-dom"

const Item = ( { id, name, img , price, stock } ) => { 
    return ( 
        <article key={id}>
            <header>
                <h2> { name} </h2>
            </header>
            <picture> 
                <img src={img} alt= {name}/>
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
               <link to={ '/item/:itemId'}> Ver detalle   </link>
            </footer>
        </article>
    )
}

export default Item