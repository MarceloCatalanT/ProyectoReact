import React, { useContext, useState, useEffect } from 'react';
import CartContext from '../../context/cartContext/cartContext/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import CartList from './CartList';
import CartTotal from './CardTotal';

const CartDetail = () => {
  const [orderId, setOrderId] = useState('');
  const { cart, removeItem, clear } = useContext(CartContext);
  const navigate = useNavigate();

  const [totalPrice, setTotalPrice] = useState(0);
  const [buyer, setBuyer] = useState({ name: '', mail: '' });


  useEffect(() => {
    let total = 0;
    cart.forEach((el) => {
      total += el.quantity * el.price;
    });
    setTotalPrice(total);
  }, [cart]);

  const addToCart = () => {
    const db = getFirestore();
    const orderCollection = collection(db, 'orders');

    const purchase = {
      buyer: {
        id: 1,
        name: buyer.name,
        mail: buyer.mail,
      },
      items: cart,
      date: new Date(),
      total: totalPrice,
    };

    return new Promise((resolve, reject) => {
      addDoc(orderCollection, purchase)
        .then((docRef) => {
          const orderId = docRef.id;
          resolve(orderId);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const handleAddToCartWithAlert = () => {
    Swal.fire({
      title: 'Confirmación',
      text: '¿Deseas crear la orden?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        addToCart()
          .then((orderId) => {
            setOrderId(orderId);
            Swal.fire({
              title: 'Orden creada',
              text: `El ID de tu compra es: ${orderId}`,
              icon: 'success',
            });
            navigate('/');
            clear();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const increaseQuantity = (el) => {
    el.quantity += 1;
    setTotalPrice(calculateTotalPrice(cart));
  };

  const decreaseQuantity = (el) => {
    if (el.quantity > 1) {
      el.quantity -= 1;
      setTotalPrice(calculateTotalPrice(cart));
    }
  };

  const calculateTotalPrice = (cart) => {
    return cart.reduce((total, el) => total + el.quantity * el.price, 0);
  };

  return (
    <div className="cart">
      <h2>CART</h2>

      <CartList cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem} />

      {cart.length > 0 && (

        <CartTotal totalPrice={totalPrice} buyer={buyer} handleAddToCartWithAlert={handleAddToCartWithAlert} setBuyer={setBuyer} />

      )}
    </div>
  );
}

export default CartDetail;
