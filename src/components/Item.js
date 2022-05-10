import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function Item({ id, nombre, precio, imagen }) {
  const [number, setNumber] = useState(0);

  const addProduct = (cantProduct) => {
    setNumber(cantProduct);
  };
  return (
    <>
   <Card style={{ width: '18rem' }}>
        <Card.Img className="img1" variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>$ {precio}</Card.Text>
          {number === 0 ? (
            <ItemCount stock={10} addProduct={addProduct} />
          ) : (
            <Link to="/carrito">IR AL CARRITO</Link>
          )}
        </Card.Body>
        <Link to={`/item/${id}`}>ver detalles</Link>
      </Card>
    </>
  );
}

export default Item;
