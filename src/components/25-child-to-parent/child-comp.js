import React from "react";
import { Button } from "react-bootstrap";

const Childcomp = ({handleCounter}) => {
  return (
    <div>
      
      <Button onClick={() => handleCounter(1)}variant="primary">Set counter</Button>
    </div>
  );
};

export default Childcomp;
