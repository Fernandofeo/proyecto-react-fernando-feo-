import Item  from "../Item/Item"

const ItemList = ( { products })=> {
    return ( 
        <section> 
            { products.map ( prod => { 
                return <item key={prod.id} { ...prod } />}   )
            } 
        </section>
    )
}

export default ItemList 
