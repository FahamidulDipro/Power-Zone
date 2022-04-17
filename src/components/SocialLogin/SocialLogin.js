import React from 'react';
import { Button } from 'react-bootstrap';
 
const SocialLogin = () => {
    return (
        <div className='mt-5'>
            <h4 className='text-light'>Or</h4>
            <hr style={{color:'white'}}/>
            <Button  className='w-100 p-3 fw-bold border-0 text-dark my-3' style={{fontSize:'20px',background:'orange'}}><img src='../images/google-bw .png' style={{width:'40px'}}/>&nbsp;&nbsp; Signin With Google</Button>
         
        </div>
    );
};

export default SocialLogin;