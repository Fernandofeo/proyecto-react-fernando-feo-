import { Link } from 'react-router-dom';


const Item = ({ id, name, category, price, img }) => {
    return (

        <article >
            <div style={{}}>
                <h4 style={{ }}>Categoría: {category} </h4>
                <h3 style={{  }}>{name}</h3>
                <img src={img} style={{}} alt={name} />
                <h4 style={{ }}>${price}</h4>
                <Link to={`/itemId/${id}`} >Ver detalle</Link>
            </div>

        </article>

    );
}

export default Item