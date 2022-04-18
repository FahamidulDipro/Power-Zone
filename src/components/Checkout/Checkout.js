import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { TrainerLoad } from "../../App";

const Checkout = () => {
  const trainers = useContext(TrainerLoad);
  const { trainerId } = useParams();
  const trainerDetail = trainers.find((trainer) => trainer.id === trainerId);
  
  return (
    <div style={{ marginTop: "200px" }}>
      {trainerDetail ? (
        <section className="detail-section text-start border container mt-5 d-flex justify-content-between p-3 flex-lg-row flex-md-row flex-sm-column flex-column">
          <div className="w-75 text-light">
            <h1>{trainerDetail?.name}</h1>
            <div className="mt-5">
              <p style={{fontSize:'20px'}}><b style={{color:'rgb(125, 184, 37)'}}>Duration: </b> {trainerDetail?.detail?.duration}</p>
              <p style={{fontSize:'20px'}}><b style={{color:'rgb(125, 184, 37)'}}>Fitness Level: </b> {trainerDetail?.detail?.fitnessLevel}</p>
              <p style={{fontSize:'20px'}}><b style={{color:'rgb(125, 184, 37)'}}>Workout Per Week: </b> {trainerDetail?.detail?.workoutPerWeeks}</p>
              <p className="text-light mt-3 ">{trainerDetail?.shortDescription}</p>
              <p className="display-4 fw-bold" style={{color:'rgb(125, 184, 37)'}}>${trainerDetail?.price}</p>
              <Button className="my-3 border-0 fw-bold" style={{backgroundColor:'rgb(125, 184, 37)',fontSize:'20px'}}>Checkout</Button>
            </div>
          </div>
          <div className="w-50">
            <img
              src={trainerDetail?.picture}
              alt="trainerPicture"
              className="img-fluid px-3"
            />
          </div>

        </section>
      ) : (
        <><h1 className="text-light">No Trainer Selected</h1>
        <Button style={{backgroundColor:'rgb(125, 184, 37)'}} className='border-0 mt-3'><Link to={'/home'} className='text-decoration-none text-light fw-bold'>Go To Services</Link></Button>
        </>
      )}
    </div>
  );
};

export default Checkout;
