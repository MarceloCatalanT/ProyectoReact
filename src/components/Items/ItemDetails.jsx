import React from "react"

const ItemDetail = ({ character }) => {

    return (
        <div className="detalle-container">
            <h2>Detalles del Personaje</h2>
            <div className="character-details">
                <img src={character.image} alt={character.name} className="character-image" />
                <div className="character-info">
                    <h3>{character.name}</h3>
                    <p>Estado: {character.status}</p>
                    <p>Especie: {character.species}</p>
                    <p>Sexo: {character.gender}</p>
                    <p>Locacion: {character.location.name}</p>
                </div>

            </div>

        </div>
    )
}

export default ItemDetail