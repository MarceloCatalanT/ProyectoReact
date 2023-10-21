import React from 'react';
import { Link } from 'react-router-dom';


const Tarjeta = ({item}) => {

  return (
    
    <div className="product-card">
            <img className="product-image" src={item.image}></img>
            <h2 className="product-title">{item.name}</h2>
            <p>Stock: {item.stock}</p>
            <p>Precio: {item.price}</p>
            <Link to={`/item/${item.id}`}>
              <button className="add-to-cart-button">Ver detalles</button>
            </Link>
    </div>

  )
}

export default Tarjeta;