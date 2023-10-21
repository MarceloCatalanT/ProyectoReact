import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Counter = ({ onAdd }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    Swal.fire({
      title: 'El producto se añadio al carrito!',
      text: `Se añadio ${count} producto(s) al carrito.`,
      icon: 'success',
    });
    
    onAdd(count);
  };

  return (
    <div className="counter">
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};
export default Counter