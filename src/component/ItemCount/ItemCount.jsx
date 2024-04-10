import { useState } from 'react'

const ItemCount = ({ initialValue = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initialValue)

  const decrement = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  };

  const increment = () => {
    if (count < stock) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <article>
    <h3>{count}</h3>
    <button onClick={decrement} style={{  color: 'black', borderRadius: '5px', marginRight: '5px' }}>-</button>
    <button onClick={() => onAdd(count)} style={{  color: 'black', borderRadius: '5px', marginRight: '5px' }}>Agregar al Carrito</button>
    <button onClick={increment} style={{  color: 'black', borderRadius: '5px' }}>+</button>
</article>


  );
};

export default ItemCount