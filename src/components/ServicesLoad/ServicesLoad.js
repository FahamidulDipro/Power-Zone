import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { TrainerLoad } from "../../App";
import Service from "../../Service/Service";

const ServicesLoad = () => {
  const trainers = useContext(TrainerLoad);
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <h1 className="text-light">Services I Provide</h1>
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
