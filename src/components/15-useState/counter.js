import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="warning" onClick={() => setCounter(counter => counter<=0? counter=0:counter-1)}>
          <AiOutlineMinus />
        </Button>
        <Button variant="light" disabled>
          {counter}
        </Button>
        <Button onClick={() => setCounter(counter => counter + 1)} variant="secondary">
          <AiOutlinePlus />
        </Button>
        <Button onClick={() => setCounter(0)} variant="danger">
          <GrPowerReset />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
