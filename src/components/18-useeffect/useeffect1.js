import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";

const UseEffect1 = () => {
  
    const [counter, setCounter] = useState(0)

useEffect(() => { // bu bir update effect ve counter bagli olarak window title degistiriyor
  document.title = `Hello ${counter}` //window ilgilendiren meslelerde dogrudan JS kullaniyoruz cunku bu bir component degil

  // return () => { burasi unmounting kismi
  //   second
  // }

}, [counter])

  


  return (
    <Container>
      <h1>{counter} tikladim</h1>
      <Button variant="info" onClick={()=>{setCounter(preVal=>preVal+1)}}>Click me</Button>
    </Container>
  );
};

export default UseEffect1;
