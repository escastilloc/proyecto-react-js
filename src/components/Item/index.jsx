import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from "react";

export const Item = ({name, price, img}) => {
    const [contador, setContador] = useState(0);
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>[{name}]</Card.Title>
    <Card.Text>
     {price}
    </Card.Text>
    <Button variant="primary">Añadir al carrito</Button>
    <Button onClick={() => {setContador(contador-1)}}>-</Button>
    {contador}
    <Button onClick={() => {setContador(contador+1)}}>+</Button>
  </Card.Body>
</Card>
    )
}