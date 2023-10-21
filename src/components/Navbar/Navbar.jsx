import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {


  return (
    <div className='Navbar'>
      <Link to="/">
        <h2 className='Titulonavbar'>STORE <span>CATALAN</span></h2>
      </Link>
      <div className='Navbar-der'>
        <Link to="/">Inicio</Link>
        <Link to="/category/vacuno" >Vacuno</Link>
        <Link to="/category/embutidos" >Embutidos</Link>
        <Link to="/cart">Cart</Link>        
        <Link to="/item/:id"></Link>

        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
