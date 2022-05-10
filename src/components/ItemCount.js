/* 
const ItemCount = () => {       


    const contador = 0 

    const handleClick = () =>{
        contador++;
    }




  return (
    <div>
        <p> Contador Actual: {contador} </p>  
        <button onClick={handleClick}> click </button>
    </div>
  )
}

export default ItemCount */

import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'




export default function ItemCount({stock, addProduct}) {
  const [count, setCount] = useState (0);

  function adding () {
      if (count < stock){
      setCount(count +1);}
  }
  function subs () {
      if (count > 0){
      setCount(count -1)}
  }
  function handleClick () {
        addProduct(count);
    }
  return (
    <>
        <div className='itemConunt'>
            <p>{count}</p>
            <div className='addSubs'>
                <div >
                    <Button onClick={adding} variant="outline-success">+</Button>
                </div>
                <div>
                    <Button onClick={subs}  variant="outline-danger">-</Button>
                </div>
            </div>
            <Button onClick={handleClick} className='onAdd'  variant="primary" size="sm">AGREGAR AL CARRITO</Button>
            </div>
        </>

    )
}