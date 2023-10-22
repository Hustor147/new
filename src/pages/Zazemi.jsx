import Background from "../components/Background";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, Button } from "reactstrap";

const Zazemi = () => {
  const [vybranaRasa, setVybranaRasa] = useState(null);
  const vybranaRasaInfo = Background.find((neco) => neco.name === vybranaRasa);
  const save = () => {
    localStorage.setItem("zazemi", vybranaRasa);
    window.location.href = "/5";
  };
  const back = () => {
    window.location.href = "/3";
  };
  return (
    <>
      <div className="App">
        {/* <Label for="exampleSelect" sm={2}>
        {rase}
      </Label> */}

        <Input
          id="exampleSelect"
          name="select"
          type="select"
          onChange={(e) => setVybranaRasa(e.target.value)}
        >
          <option value="">Vyber zazemi</option>
          {Background.map((xxx) => (
            <option key={xxx.id} value={xxx.name}>
              {xxx.name}
            </option>
          ))}
        </Input>
        {vybranaRasa && (
          <div className="infoOkno">
            <h2>{vybranaRasaInfo.description}</h2>
            <Button onClick={back}>Zpet</Button>
            <Button onClick={save}>Potvrdit</Button>
          </div>
        )}
      </div>
    </>
  );
};
export default Zazemi;
