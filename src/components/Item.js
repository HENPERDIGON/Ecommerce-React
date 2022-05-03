import React from 'react'
import Card  from 'react-bootstrap/Card'
import ItemCount from './ItemCount'

function Item({ id, nombre, precio, imagen }) {
    return (
        <>
            <Card key={id} style={{ width: '18rem' }}>
                <Card.Img className='img1' variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        $ {precio}
                    </Card.Text>
                    <ItemCount stock={10} />
                </Card.Body>
            </Card>
        </>
    )
}

export default Item     