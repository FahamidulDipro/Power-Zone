import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({trainer}) => {
  const navigate = useNavigate();
  const handleDetail = (id)=>{
    navigate(`/checkout/${id}`);
  }
    const {id,name,price,picture,detail} = trainer;
    return (
        <Col lg={4} className='mt-5'>
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <b>Price: </b>${price}
          </Card.Text>

          <Button variant="primary" onClick={()=>handleDetail(id)}>Learn More</Button>
        </Card.Body>
      </Card></Col>
      
    );
};

export default Service;