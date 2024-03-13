import Item  from "../Item/Item"

const ItemList = ( { products })=> {
    return ( 
        <section> 
            { products.map ( prod => { 
                return <Item key={prod.id} { ...prod } />}   )
            } 
        </section>
    )
}

export default ItemList 