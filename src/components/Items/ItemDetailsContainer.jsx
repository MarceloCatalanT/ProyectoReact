import React from 'react';
import { useParams } from 'react-router-dom';
import Detalle from '../../pages/Detalle';


const ItemDetailContainer = () => {
  const { id } = useParams();


  return (
    <div>
      <Detalle id={id} />
    </div>
  );
};

export default ItemDetailContainer;
