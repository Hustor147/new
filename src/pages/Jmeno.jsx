import { useState } from "react";
import { Input, Button, Label, FormGroup } from "reactstrap";
import PresvedceniData from "../components/PresvedceniData";

const Jmeno = () => {
  const [MyName, setMyName] = useState("");
  const [Presvedceni, setPresvedceni] = useState("");
  const [PresvedceniOOO, setPresvedceniOOO] = useState("");

  const vyber = PresvedceniData.find((neco) => neco.id === Presvedceni);
  let subPole = [];
  if (Presvedceni) {
    for (let i = 0; i < vyber.name.length; i++) {
      let obj = {
        id: i,
        name: vyber.name[i],
        info: vyber.description[i],
      };
      subPole.push(obj);
    }
  }
  const save = () => {
    localStorage.setItem("Jmeno", MyName);
    localStorage.setItem("Presvedceni", PresvedceniOOO);

    window.location.href = "/6";
  };
  const back = () => {
    window.location.href = "/4";
  };
  console.log(PresvedceniOOO);
  return (
    <>
      <h2>Jmeno</h2>
      <Input
        type="text"
        placeholder="Zadej jmeno"
        value={MyName}
        onChange={(e) => setMyName(e.target.value)}
      ></Input>
      <FormGroup>
        <Input
          type="radio"
          name="radio1"
          value="Dobro"
          onChange={(e) => setPresvedceni(e.target.value)}
        />{" "}
        <Label>Dobro</Label>
        <Input
          type="radio"
          name="radio1"
          value="Neutralita"
          onChange={(e) => setPresvedceni(e.target.value)}
        />{" "}
        <Label>Neutralita</Label>
        <Input
          type="radio"
          name="radio1"
          value="Zlo"
          onChange={(e) => setPresvedceni(e.target.value)}
        />{" "}
        <Label>Zlo</Label>
      </FormGroup>
      {Presvedceni && (
        <div>
          {subPole.map((neco) => (
            <div key={neco.id}>
              <Input
                type="radio"
                name="radio2"
                value={neco.name}
                onChange={(e) => setPresvedceniOOO(e.target.value)}
              />{" "}
              <Label>{neco.name}</Label>
              <p>{neco.info}</p>
            </div>
          ))}
        </div>
      )}

      <Button onClick={back}>Zpet</Button>
      <Button onClick={save}>Potvrdit</Button>
    </>
  );
};
export default Jmeno;
