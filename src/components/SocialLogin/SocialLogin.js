import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
 
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname||'/';
    const googleLogin = ()=>{
        signInWithGoogle().then(()=>{
            navigate(from,{replace: true});
        });
        
    }
    return (
        <div className='mt-5'>
            <h4 className='text-light'>Or</h4>
            <hr style={{color:'white'}}/>
            <Button  className='w-100 p-3 fw-bold border-0 text-dark my-3' style={{fontSize:'15px',background:'orange'}} onClick={googleLogin}><img src='../images/google-bw.png' style={{width:'30px'}} alt='googleIcon'/>&nbsp;&nbsp; Signin With Google</Button>
         
        </div>
    );
};

export default SocialLogin;