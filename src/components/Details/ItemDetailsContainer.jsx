import React, { useState, useEffect, useContext } from 'react'
import CartContext from '../../context/cartContext/cartContext/CartContext';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetails from './ItemDetails';

const ItemDetailsContainer = ({ id }) => {
    const [item, setitem] = useState(null);
    const onAdd = (q) => {
        addItem(item, q)
    }
    const { addItem } = useContext(CartContext);
    
    useEffect( () => {
        const db = getFirestore();

        const itemRef = doc(db, "items", id)

        getDoc(itemRef)
            .then( (snapshot) =>{
                console.log(snapshot.exists())
                if(snapshot.exists()) {
                    
                    setitem({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                }
            })
            .catch((err) => console.log(err))

    }, [])
    return (
        <>
            {
                item !== null &&
                <ItemDetails item={item} onAdd={onAdd} />

            }
        </>
    )
}

export default ItemDetailsContainer