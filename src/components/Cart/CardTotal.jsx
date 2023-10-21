import React from 'react';

const CartTotal = ({ totalPrice, buyer, handleAddToCartWithAlert, setBuyer }) => {
  return (
    <div className="cart-total">
      <p>Total de la compra: ${totalPrice}</p>
      <div>
        <input
          type="text"
          placeholder="Nombre del comprador"
          value={buyer.name}
          onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Correo electrónico del comprador"
          value={buyer.mail}
          onChange={(e) => setBuyer({ ...buyer, mail: e.target.value })}
        />
      </div>
      <button className="cart-button" onClick={handleAddToCartWithAlert}>
        Create order
      </button>
    </div>
  );
}

export default CartTotal;
