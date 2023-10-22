import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Label, Input, Button } from "reactstrap";
import DataRasy from "../components/DataRasy";
import "./Rasa.css";

function Rasa() {
  const [vybranaRasa, setVybranaRasa] = useState(null);
  const [rase, setRase] = useState([
    "Clovek",
    "Ork",
    "Elf",
    "Trpaslik",
    "Tiefling",
  ]);

  const vybranaRasaInfo = DataRasy.find((neco) => neco.rasa === vybranaRasa);
  const save = () => {
    localStorage.setItem("vybranaRasa", vybranaRasa);
    if (vybranaRasaInfo.subrasa === 0) {
      window.location.href = "/3";
    } else {
      window.location.href = "/2";
    }
  };
  return (
    <div className="Epp">
      <div className="App">
        {/* <Label for="exampleSelect" sm={2}>
        {rase}
      </Label> */}

        <Input
          className="inp"
          id="exampleSelect"
          name="select"
          type="select"
          onChange={(e) => setVybranaRasa(e.target.value)}
        >
          <option value="">Vyber rasu</option>
          {rase.map((xxx) => (
            <option key={xxx} value={xxx}>
              {xxx}
            </option>
          ))}
        </Input>
        {vybranaRasa && (
          <div className="infoOkno">
            <h2>{vybranaRasaInfo.rasa}</h2>
            <div className="portret">
              <img src={vybranaRasaInfo.src} width={150} height={150} />
            </div>
            <div className="odd">
              <p>{vybranaRasaInfo.vlastnosti}</p>
              <p>{vybranaRasaInfo.vek}</p>
              <p>{vybranaRasaInfo.velikost}</p>
              <p>{vybranaRasaInfo.rychlost}</p>
              <p>{vybranaRasaInfo.presvedceni}</p>
              <p>{vybranaRasaInfo.jazyk}</p>
              <p>{vybranaRasaInfo.bonuses}</p>
            </div>
            <Button onClick={save}>Potvrdit</Button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Rasa;
