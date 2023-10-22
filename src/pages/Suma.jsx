import { Container, Row, Col, Button } from "reactstrap";

const Suma = () => {
  let rasa = localStorage.getItem("vybranaRasa");
  let subrasa = localStorage.getItem("vybranaSubRasa");
  let povolani = localStorage.getItem("Povolani");
  let zazemi = localStorage.getItem("zazemi");
  let presvedceni = localStorage.getItem("Presvedceni");
  let jmeno = localStorage.getItem("Jmeno");
  const save = () => {
    window.location.href = "/7";
  };
  const back = () => {
    window.location.href = "/5";
  };

  //   console.log(result);
  return (
    <Container>
      <h2>Celkem</h2>
      <Row>
        <h3>Jmeno</h3>
        <br />
        <h3>{jmeno}</h3>
      </Row>
      <br />
      <br />
      <Row>
        <Col>
          <h3>Rasa</h3>
          <br />
          <h3>{rasa}</h3>
        </Col>
        <Col>
          <h3>Podrasa</h3>
          <br />
          <h3>{subrasa}</h3>
        </Col>
        <Col>
          <h3>Povolani</h3>
          <br />
          <h3>{povolani}</h3>
        </Col>
        <Col>
          <h3>Zazemi</h3>
          <br />
          <h3>{zazemi}</h3>
        </Col>
        <Col>
          <h3>Presvedceni</h3>
          <br />
          <h3>{presvedceni}</h3>
        </Col>
        <Button onClick={back}>Zpet</Button>
        <Button onClick={save}>Potvrdit</Button>
      </Row>
    </Container>
  );
};
export default Suma;
