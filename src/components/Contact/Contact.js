import React from 'react';
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';

const Contact = () => {
    return (
        <Form className='container text-start w-75    p-3 rounded' style={{marginTop:'100px',marginBottom:'100px'}} >
            <h1 className='text-light my-3'>Contact Us</h1>
            <br />
        <Form.Group className="mb-3 " controlId="formBasicEmail">
       
          <Form.Control type="email" placeholder="Enter email" />
        
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
   
    <Form.Control as="textarea" rows={3} placeholder='Write Your Message'/>
  </Form.Group>
         
        
        <Button variant="primary" type="submit" className='w-100 border-0 p-3 fw-bold' style={{backgroundColor: 'rgb(125, 184, 37)',fontSize:'20px'}}>
          Submit
        </Button>
      </Form>
    );
};

export default Contact;