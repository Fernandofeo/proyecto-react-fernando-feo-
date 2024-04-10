import Item from "../Item/Item"


const ItemList = ({ products }) => {
    return (
        <section style={{display: "grid" , alignItems: "center" }}> 
            {products.map(product => {
                return <Item key={product.id} {...product} />
            })}
        </section>
    )
}

export default ItemList
