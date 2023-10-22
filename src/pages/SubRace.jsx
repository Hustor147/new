import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, Button } from "reactstrap";
import DataRasy from "../components/DataRasy";
import "./Rasa.css";

function SubRasa() {
  const [vybranaRasa, setVybranaRasa] = useState(null);
  // const [vybranaSubRasaInfo, setVybranaSubRasaInfo] = useState(null);
  const vybranaRasa0 = localStorage.getItem("vybranaRasa");

  const vybranaSubRasaInfo = DataRasy.find(
    (neco) => neco.rasa === vybranaRasa0
  );

  console.log(vybranaSubRasaInfo);

  let subPole = [];
  for (let i = 0; i < vybranaSubRasaInfo.subinfo.length; i++) {
    let obj = {
      id: i,
      sub: vybranaSubRasaInfo.subrasa[i],
      info: vybranaSubRasaInfo.subinfo[i],
    };
    subPole.push(obj);
  }
  console.log(subPole);
  const save = () => {
    localStorage.setItem("vybranaSubRasa", vybranaRasa);
    window.location.href = "/3";
  };
  const back = () => {
    localStorage.setItem("vybranaSubRasa", vybranaRasa);
    window.location.href = "/";
  };
  const vybrano = subPole.find((xxx) => xxx.sub === vybranaRasa);

  return (
    <div>
      <Input
        id="exampleSelect"
        name="select"
        type="select"
        onChange={(e) => setVybranaRasa(e.target.value)}
      >
        <option value="">Vyber subrasu</option>
        {subPole.map((xxx) => (
          <option key={xxx.id} value={xxx.sub}>
            {xxx.sub}
          </option>
        ))}
      </Input>
      {vybranaRasa && (
        <div className="infoOkno">
          <h2>{vybrano.sub}</h2>
          <p>{vybrano.info}</p>
        </div>
      )}
      <Button onClick={back}>Zpet</Button>
      <Button onClick={save}>Potvrdit</Button>
    </div>
  );
}
export default SubRasa;
