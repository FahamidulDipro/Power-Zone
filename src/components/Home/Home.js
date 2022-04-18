import React from 'react';
import ServicesLoad from '../ServicesLoad/ServicesLoad';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className='mt-5'>
            <Slider></Slider>
           <ServicesLoad></ServicesLoad>
        </div>
    );
};

export default Home;