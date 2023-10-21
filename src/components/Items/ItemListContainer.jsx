import React, { useState, useEffect } from 'react';
import Tarjeta from './Tarjeta';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = ({ selectedCategory }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");

    const q = selectedCategory
      ? query(itemCollection, where("category", "==", selectedCategory))
      : itemCollection;

    getDocs(q)
      .then((snapshot) => {
        const allData = snapshot.docs.map((document) => ({ id: document.id, ...document.data() }));
        setItems(allData);
      });
  }, [selectedCategory]);

  return (
    <div>
      <h2 className='titulo-home'>Bienvenido a nuestra tienda virtual de Carnes Premium</h2>
      <ul className="character-list">
        {items.map((item) => (
          <Tarjeta key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
