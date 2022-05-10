import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import customFetch from '../utils/customFetch';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {

    const [Productos, setProducto] = useState ({})

    const {id} = useParams()

    useEffect(() => {
        customFetch(2000)

        .then(resultado => setProducto(resultado.find(i => i.id === Number(id))))
        .catch(error => console.log(error));
    }, [id])

    return (
        <>
            <ItemDetail productos={Productos} />
        </>
    )
}

export default ItemDetailContainer 