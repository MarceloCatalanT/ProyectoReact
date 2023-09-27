import React from 'react';
import { Link } from 'react-router-dom';


const Tarjeta = ({character}) => {

  return (
    
    <div className="product-card">
            <img src={character.image} alt={character.name} className="product-image" />
            <h2 className="product-title">{character.name}</h2>
            <Link to={`/item/${character.id}`}>
              <button className="add-to-cart-button">Ver detalles</button>
            </Link>
    </div>

  )
}

export default Tarjeta;