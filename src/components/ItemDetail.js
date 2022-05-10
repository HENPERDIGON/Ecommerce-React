import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetail({ productos }) {
  const [number, setNumber] = useState(0);

  const addProduct = (cantProduct) => {
    setNumber(cantProduct);
  };

  return (
    <>
      <div className="center">
      <Card key={productos.id} className="bg-dark text-dark" style={{ width: '40rem' }}>
          <Card.Img src={productos.imagen} />
          <Card.ImgOverlay>
            <div className="bgDetail">
              <Card.Title>{productos.nombre}</Card.Title>
              <Card.Text>{productos.descripcion}</Card.Text>
              <Card.Text>$ {productos.precio}</Card.Text>
              {number === 0 ? (
                <ItemCount stock={10} addProduct={addProduct} />
              ) : (
                <Link to="/carrito">IR AL CARRITO</Link>
              )}
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
}

export default ItemDetail;
