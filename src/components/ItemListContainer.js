/* const ItemListContainer = ({greeting}) => {
    console.log (greeting)
    return(
        <div> ¡Saludos a Todos! </div>
    
    )
    
}

export default  ItemListContainer */

import React, { useEffect, useState } from 'react'
import customFetch from "../utils/customFetch";

import ItemList from './ItemList';
import { useParams } from 'react-router-dom';






export default function ItemListContainer() {
    const [items, setItems] = useState([]);

    const { categoryid } = useParams();



    useEffect(() => {
        customFetch(3000)
        .then(resultado => {
            if(categoryid){
                setItems(resultado.filter(i=> i.categoria === categoryid))}
                else{
                    setItems(resultado)
                }
        })
        .catch(error => console.log(error));
    }, [categoryid])



    return (
        <>
        <div className="con1">
        <ItemList  productos={items} />
        </div>
        </>
    )
}