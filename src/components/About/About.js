import React from 'react';

const About = () => {
    return (
        <div style={{marginTop:'100px'}} className='container text-light'>
            <h1 className=' text-start'>About Me</h1>
            <hr />
            <section className='text-start d-flex justify-content-between flex-lg-row flex-md-row flex-sm-column flex-column p-3'>
                <div className='order-1 m-3'>
                    <p>Hi! I am <b>Md. Fahamidul Islam</b>. I am a person with a passion for developing scalable web applications and also working accross the full stack. I have designed 20+ front end UIs and currently focusing on database and backend. I have extensive experience working with Javascript and React.js. Currently I am trying my best to build some unique web applications with React.js and I would jump at any opportunity to become an experienced fullstack web app developer to continue growing my skillset in the JS field. </p>
                </div>
                <div className='m-3'> 
                    <img src='../images/myPhoto.jpg' alt="MyPhoto" className='img-fluid rounded'/>
                </div>
            </section>
        </div>
    );
};

export default About;