import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TrainerLoad } from "../../App";

const Checkout = () => {
  const trainers = useContext(TrainerLoad);
  const { trainerId } = useParams();
  const trainerDetail = trainers.find((trainer) => trainer.id === trainerId);

  return (
    <div style={{ marginTop: "200px" }}>
      {trainerDetail ? (
        <section className="detail-section text-start border container mt-5 d-flex justify-content-between p-3 flex-lg-row flex-md-row flex-sm-column flex-column">
          <div className="w-50 text-light">
            <h1>{trainerDetail?.name}</h1>
          </div>
          <div className="w-50">
            <img
              src={trainerDetail?.picture}
              alt="trainerPicture"
              className="img-fluid"
            />
          </div>
        </section>
      ) : (
        <h1>No Trainer Selected</h1>
      )}
    </div>
  );
};

export default Checkout;
