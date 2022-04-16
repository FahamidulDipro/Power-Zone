import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = ({trainer}) => {
    const {name,price,picture,detail} = trainer;
    return (
        <Col lg={4} className='mt-5'>
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p><b>Price: </b>${price}</p>
          </Card.Text>

          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card></Col>
      
    );
};

export default Service;