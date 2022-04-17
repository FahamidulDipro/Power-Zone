import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {trainerId} = useParams();
    return (
        <div className='mt-5'>
            <h1>Checkout</h1>
            {
                console.log(trainerId)
            }
        </div>
    );
};

export default Checkout;