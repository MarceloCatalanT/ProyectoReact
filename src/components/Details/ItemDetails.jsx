import React from "react"
import Counter from "../Counter/Counter"

const ItemDetail = ({ item, onAdd }) => {

    return (
        <div className="detalle-container">
            <h2>Detalles del Personaje</h2>
            <div className="character-details">
                <img className="character-image" src={item.image} />
                <div className="character-info">
                    <h2>
                        {item.name}
                    </h2>
                    <p>
                        Stock: {item.stock}
                    </p>
                    <p>
                        ${item.price} x kg
                    </p>
                </div>                
                
            </div>
        <Counter onAdd={onAdd}  />
        </div>
    )
}

export default ItemDetail