import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
      <div className="item-list-container" style={{ backgroundColor: 'gray', margin: '20px', textAlign: 'center'}}>
        <p>{greeting}</p>
      </div>
    );
  };
  

export default ItemListContainer;
