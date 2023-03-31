import React, { useState } from "react";
import { Container, FormGroup, Form } from "react-bootstrap";

// formda cok bilgi girilecekse hepsini tek state yapalim
// setFormdata problem cikar.
// set yaparken varolan degeri alip, spread yapip, ilgili ismi degistirecegiz

const Form3 = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  return (
    <Container className="m-5">
      <FormGroup>
        <Form.Control
          type="text"
          placeholder="Adiniz?"
          onChange={(e) => setForm({...FormData, firstName: e.target.value})}
          
        ></Form.Control>
      </FormGroup>
      <FormGroup>
        <Form.Control
          type="text"
          placeholder="Soyad?"
          onChange={(e) => setForm({...FormData, lastName: e.target.value})}
          
        ></Form.Control>
      </FormGroup>
      <Form.Control
          type="email"
          placeholder="Email?"
          onChange={(e) => setForm({...FormData, email: e.target.value})}
          
        ></Form.Control>
    </Container>
  );
};

export default Form3;
