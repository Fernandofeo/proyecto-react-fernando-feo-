import ItemCount from "../ItemCount/ItemCount";

const ItemDetail =({ id , name , img , category , description , price , stock}) => {
    return( 
        <article style={ {display : `grid `, textAlign : `center`, backgroundColor : ``}} >
            <header >
                <h2> {name} </h2>
            </header>
            <picture>
                <img src= {img} alt={name} style={ {maxWidth : 100}}/>
            </picture>
            <section >
                <p> Categoria : {category}  </p>
                <p> Descripcion : {description} </p>
                <p> Precio : { price}   </p>
                <p>Disponible: {stock} </p>
            </section>
            <footer>
                <ItemCount initial={1} stock= {stock} onAdd={(quantity) => console.log('Cantidad agregada')}/>
            </footer>
        </article>
    )
}
export default ItemDetail