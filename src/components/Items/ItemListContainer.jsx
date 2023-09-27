import React, { useState, useEffect } from 'react';
import useFetch from '../../Hooks/useFetch';
import Tarjeta from './Tarjeta';

const ItemListContainer = ({ filterBySpecies, filterByGender }) => {
  const [data] = useFetch('https://rickandmortyapi.com/api/character/');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data && data.results) {
      let filtered = data.results;

      if (filterBySpecies === 'alien') {
        filtered = filtered.filter((character) => character.species === 'Alien');
      }

      if (filterByGender === 'female') {
        filtered = filtered.filter((character) => character.gender === 'Female');
      }
      setFilteredData(filtered);
    }
  }, [data, filterBySpecies, filterByGender]);

  return (
    <div>
      <h2 className='titulo-home'>Bienvenido a nuestra tienda virtual de Posters</h2>
      <ul className="character-list">
        {filteredData.map((character) => (
          <Tarjeta key={character.id} character={character} />
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
