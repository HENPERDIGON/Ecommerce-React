import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import customFetch from '../utils/customFetch';
import { Producto } from '../utils/Producto';


function ItemDetailContainer() {

    const [producto, setProducto] = useState ({})

    useEffect(() => {
        customFetch(3000, Producto)
        .then(resultado => setProducto(resultado))
        .catch(error => console.log(error));
    }, [])

    return (
        <>
            <ItemDetail producto={producto} />
        </>
    )
}

export default ItemDetailContainer 