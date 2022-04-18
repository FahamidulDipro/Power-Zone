import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.muscleandfitness.com/wp-content/uploads/2018/12/Personal-Trainer-Training-Partner-GettyImages-654427364.jpg?quality=86&strip=all"
            alt="First slide" style={{height:'90vh'}}
          />
          <Carousel.Caption>
            <h3 style={{color:'greenyellow'}} className='fw-bold'>BODYBUILDING FOR BEGINNERS PROGRAM</h3>
            <p>4 weeks, 7 workouts For Absolute Beginners!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="Second slide" style={{height:'90vh'}}
          />
      
          <Carousel.Caption>
            <h3 style={{color:'greenyellow'}} className='fw-bold'>THE BEST POWERLIFTING PROGRAM</h3>
            <p>10 weeks, 11 workouts</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.website-files.com/5ace2d3c0e7edb23e9909f06/60242130dce4053c3df2242f_AXIS-WEB-RES-49%20copy.jpg"
            alt="Third slide" style={{height:'90vh'}}
          />
      
          <Carousel.Caption>
            <h3 style={{color:'greenyellow',textTransform:'uppercase'}} className='fw-bold'>Certified Personal Trainer With 10 years of experiences</h3>
            <p>If you are looking to get started on your fitness journey, let's have a conversation.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Slider;