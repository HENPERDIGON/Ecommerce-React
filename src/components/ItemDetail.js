import React from 'react'
import Card from 'react-bootstrap/Card'


function ItemDetail({ producto }) {
    return (
        <>
            <div className='center'>
                <Card className="bg-dark text-dark" style={{ width: '40rem' }}>
                    <Card.Img src={producto.imagen} />
                    <Card.ImgOverlay>
                        <div className='bgDetail'>
                            <Card.Title>{producto.nombre}</Card.Title>
                            <Card.Text>
                                {producto.descripcion}
                            </Card.Text>
                            <Card.Text>$ {producto.precio}</Card.Text>
                        </div>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </>
    )
}

export default ItemDetail 