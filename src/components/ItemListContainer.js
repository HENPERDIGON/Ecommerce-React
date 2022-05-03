/* const ItemListContainer = ({greeting}) => {
    console.log (greeting)
    return(
        <div> ¡Saludos a Todos! </div>
    
    )
    
}

export default  ItemListContainer */

import React, { useEffect, useState } from 'react'
import customFetch from "../utils/customFetch";
import Productos from "../utils/Productos.Js";
import ItemList from './ItemList';

export default function ItemListContainer() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        customFetch(2000, Productos)
        .then(resultado => setItems(resultado))
        .catch(error => console.log(error));
    }, [items])

    return (
        <>
        <div className="con1">
        <ItemList  productos={items} />
        </div>
        </>
    )
}