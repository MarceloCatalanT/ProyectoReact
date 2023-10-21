import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import "./App.css"
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Items/ItemListContainer';
import CartContextProvider from './context/cartContext/cartContext/CartContextProvider';
import Detalle from './pages/Detalle';



const App = () => {

  return (
    <>      
    <CartContextProvider>
          <Navbar />

            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/category/vacuno' element={<ItemListContainer selectedCategory='Vacuno' />} />
            <Route path='/category/embutidos' element={<ItemListContainer selectedCategory='Embutido' />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/item/:id' element={<Detalle />} />
            </Routes>

      </CartContextProvider>

    </>
  );
}

export default App;

