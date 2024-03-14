import Item  from "../Item/Item"

const ItemList = ( { products })=> {
    return ( 
        <section style={ {display : `flex`, margin : 25, padding : 25, flexDirection : `column`, textAlign: `center`}}> 
            { products.map ( product => { 
                return <Item key={product.id} {...product } />}   )
            } 
        </section>
    )
}

export default ItemList 