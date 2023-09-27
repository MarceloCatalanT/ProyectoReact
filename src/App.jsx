import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/Items/ItemListContainer';
import { Route, Routes } from 'react-router-dom';
import ItemDetailsContainer from './components/Items/ItemDetailsContainer';
import "./App.css"

const App = () => {
  const [filterBySpecies, setFilterBySpecies] = useState(null);
  const [filterByGender, setFilterByGender] = useState(null);

  const handleFilterBySpecies = (species) => {
    setFilterBySpecies(species);
    setFilterByGender(null);
  };

  const handleFilterByGender = (gender) => {
    setFilterByGender(gender);
    setFilterBySpecies(null);
  };

  return (
    <>
      <Navbar onFilterBySpecies={handleFilterBySpecies} onFilterByGender={handleFilterByGender} />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/aliens' element={<ItemListContainer filterBySpecies={filterBySpecies} filterByGender={filterByGender} />} />
        <Route path='/category/female' element={<ItemListContainer filterBySpecies={filterBySpecies} filterByGender={filterByGender} />} />
        <Route path='/item/:id' element={<ItemDetailsContainer />} />
      </Routes>
    </>
  );
}

export default App;

