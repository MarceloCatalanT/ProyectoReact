import React from 'react';

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => {
  return (
    <div key={item.id} className="cart-item">
      <div className="product-details">

        <p>Product: {item.name}</p>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio por unidad: ${item.price}</p>
        <p>Precio Total: ${item.quantity * item.price}</p>

        <div className="quantity-control">

          <button onClick={() => decreaseQuantity(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQuantity(item)}>+</button>

        </div>

      </div>

      <img className="img-cart" src={item.image} alt={item.name} />
      
      <button className="cart-button" onClick={() => removeItem(item.id)}> Eliminar </button>
    </div>
  );
}

export default CartItem;
