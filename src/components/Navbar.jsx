import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {

  return (
    <div className='Navbar'>
        <h2 className='Titulonavbar'>STORE <span>CATALAN</span></h2>
        <div className='Navbar-der'>
          <a href="#h">Inicio</a>
          <a href="#h">Categorias</a>
          <a href="#h">Nosotros</a>
          <a href="#h">Contacto</a>
          <a href="#h">Servicios</a>
          <CartWidget />
        </div>
        
    </div>
  );
};

export default Navbar;
