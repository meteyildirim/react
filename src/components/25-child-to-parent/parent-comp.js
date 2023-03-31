import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Childcomp from "./child-comp";

const ParentComp = () => {
  const [counter, setCounter] = useState(0);

  // fonksiyonu tanimla ve child gonder, dogruden setCounter da gondermek mumkun
  const handleCounter = (val) => {
    setCounter((prev) => prev + val);
  };

  return (
    <div>
      <div>Counter:{counter}</div>
      <Childcomp handleCounter={handleCounter} />
    </div>
  );
};

export default ParentComp;
