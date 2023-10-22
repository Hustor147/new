import { useState } from "react";
import { Container, Col, Row, Input } from "reactstrap";
import Kostky from "../components/Kostky";

const Schopnosti = () => {
  const [hodnota, setHodnota] = useState("");
  const [hodnota2, setHodnota2] = useState("");
  const [sila, setSila] = useState("");
  let schopnost = [
    { id: "sila" },
    { id: "obratnost" },
    { id: "odolnost" },
    { id: "moudrost" },
    { id: "inteligence" },
    { id: "charisma" },
  ];
  let [pole, setPole] = useState([
    { id: 1, value: 15, active: 1 },
    { id: 2, value: 14, active: 1 },
    { id: 3, value: 13, active: 1 },
    { id: 4, value: 12, active: 1 },
    { id: 5, value: 10, active: 1 },
    { id: 6, value: 8, active: 1 },
  ]);
  const aktivni = pole.filter((polozka) => polozka.active === 1);
  const neaktivni = pole.filter((polozka) => polozka.active === 0);
  const handle = (e) => {
    const novaHodnota = parseInt(e.target.value);
    // const novaHodnota2 = e.target.value1;

    setHodnota(novaHodnota);
    // setHodnota2(novaHodnota2);

    odebratPolozku(novaHodnota);
  };
  // Odebrání položky
  const odebratPolozku = (value, abi) => {
    const novaData = pole.map((polozka) => {
      if (polozka.value === value) {
        return { ...polozka, active: 0, abilities: abi };
      }
      return polozka;
    });
    setPole(novaData);
  };
  const handleSelectChange = (e, schopnostId) => {
    const vybranaHodnota = parseInt(e.target.value);
    setHodnota(vybranaHodnota);
    const nadpis = schopnostId; // Zde můžete získat text nadpisu podle schopnostId
    console.log("Vybraná hodnota:", vybranaHodnota);
    console.log("Nadpis:", nadpis);
    // Dále můžete provádět další operace s těmito informacemi
    odebratPolozku(vybranaHodnota, nadpis);
  };
  // Obnovení položky
  const obnovitPolozku = (id) => {
    const novaData = pole.map((polozka) => {
      if (polozka.id === id) {
        return { ...polozka, active: 1 };
      }
      return polozka;
    });
    setPole(novaData);
  };
  console.log(pole);
  return (
    <Container>
      <h2>Schopnosti</h2>
      <Row>
        {schopnost.map((xxx) => (
          <Col key={xxx.id} onChange={(e) => handleSelectChange(e, xxx.id)}>
            <h3>{xxx.id}</h3>
            <Input type="select">
              <option value={hodnota}>--</option>
              {aktivni.map((neco) => (
                <option key={neco.id} value={neco.value}>
                  {neco.value}
                </option>
              ))}
            </Input>
            <h2>{hodnota}</h2>
          </Col>
        ))}
      </Row>
      <Kostky />
    </Container>
  );
};
export default Schopnosti;
