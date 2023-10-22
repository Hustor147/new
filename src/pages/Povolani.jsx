import { useState } from "react";
import Jobs from "../components/Jobs";
import { Button, Input } from "reactstrap";
const Povolani = () => {
  const [vybranaRasa, setVybranaRasa] = useState(null);
  const vyber = Jobs.find((neco) => neco.job === vybranaRasa);
  const save = () => {
    localStorage.setItem("Povolani", vybranaRasa);
    window.location.href = "/4";
  };
  const back = () => {
    window.location.href = "/2";
  };
  return (
    <>
      <Input
        id="exampleSelect"
        name="select"
        type="select"
        onChange={(e) => setVybranaRasa(e.target.value)}
      >
        <option value="">Vyber povolani</option>
        {Jobs.map((xxx) => (
          <option key={xxx.id} value={xxx.job}>
            {xxx.job}
          </option>
        ))}
      </Input>
      {vybranaRasa && (
        <div className="infoOkno">
          <h2>{vyber.job}</h2>
          <p>{vyber.description}</p>
        </div>
      )}

      <Button onClick={back}>Zpet</Button>
      <Button onClick={save}>Potvrdit</Button>
    </>
  );
};
export default Povolani;
