import React from 'react';
import CartItems from './CardItems';


const CartList = ({ cart, increaseQuantity, decreaseQuantity, removeItem }) => {
  return (
    <div>
      {cart.map((el) => (
        <CartItems key={el.id} item={el} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem} />
      ))}
    </div>
  );
}

export default CartList;
