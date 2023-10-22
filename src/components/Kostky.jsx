import { useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import "./Kostky.css";
const Kostky = () => {
  let [pole, setPole] = useState([]);
  const hodit = () => {
    pole = [];
    for (let i = 0; i < 4; i++) {
      let x = Math.floor(Math.random() * 6 + 1);
      pole.push(x);
    }
    setPole(pole.sort((a, b) => b - a));
    console.log(pole);
  };

  let celkem = pole[0] + pole[1] + pole[2] + 0;
  console.log(celkem);
  const jeNaN = isNaN(celkem);
  return (
    <Container>
      <Row>
        <Col>
          <h3 className="green">{pole[0]}</h3>
          <h3 className="green">{pole[1]}</h3>
          <h3 className="green">{pole[2]}</h3>

          <h3 className="gray">{pole[3]}</h3>
        </Col>
      </Row>
      <Button onClick={hodit}>Roll</Button>
      <h2>{celkem}</h2>
    </Container>
  );
};
export default Kostky;
