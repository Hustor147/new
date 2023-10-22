import { useState, useEffect } from "react";

import { Button } from "reactstrap";

const Buttony = () => {
  const [odkaz, setOdkaz] = useState("");
  const [value, setValue] = useState(1);
  useEffect(() => {
    clickNext();
  }, []);
  const clickNext = () => {
    setValue(value + 1);
    let link = `${value}`;

    setOdkaz(link);
    console.log(value);
  };
  return (
    <>
      <Button>Predchozi</Button>
      <Button>Dalsi</Button>
    </>
  );
};

export default Buttony;
