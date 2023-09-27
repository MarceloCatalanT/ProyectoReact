import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = ({ onFilterBySpecies, onFilterByGender }) => {
  const handleFilterAliens = () => {
    onFilterBySpecies('alien');
  };

  const handleFilterWomen = () => {
    onFilterByGender('female');
  };

  

  return (
    <div className='Navbar'>
      <Link to="/">
        <h2 className='Titulonavbar'>STORE <span>CATALAN</span></h2>
      </Link>
      <div className='Navbar-der'>
        <Link to="/">Inicio</Link>
        <Link to="/category/aliens" onClick={handleFilterAliens}>Aliens</Link>
        <Link to="/category/female" onClick={handleFilterWomen}>Personajes Femeninos</Link>        
        <Link to="/item/:id"></Link>

        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
