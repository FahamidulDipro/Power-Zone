import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { TrainerLoad } from "../../App";
import Service from "../../Service/Service";

const ServicesLoad = () => {
  const trainers = useContext(TrainerLoad);
  return (
    <div className="mt-5 container">
      <Container fluid>
        <Row>
          {trainers.map((trainer) => (
            <Service key={trainer.id} trainer={trainer}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServicesLoad;
