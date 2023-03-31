import React, { useState } from "react";
import { Container, FormGroup, Form } from "react-bootstrap";

// formda cok bilgi girilecekse hepsini tek state yapalim
// setFormdata problem cikar.
// set yaparken varolan degeri alip, spread yapip, ilgili ismi degistirecegiz

// form 3 ek olrak  setForm({...FormData, firstName: e.target.value} yerinme bir fonksiyon koysak
// bu fonksiyone e eventini gonderesek
// e.target name ve value olarak iki para,metre doner
// [name] koseli parenteze alarak degisken oldugunu belirtik

const Form4 = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const update = (e) => {
    const { name, value } = e.target;

    setForm({ ...FormData, [name]: value });
  
  };
  console.log(form)
  return (
    <Container className="m-5">
      <FormGroup>
        <Form.Control
          name="firstName"
          type="text"
          placeholder="Adiniz?"
          onChange={(e) => update(e)}
        ></Form.Control>
      </FormGroup>
      <FormGroup>
        <Form.Control
          name="lastName"
          type="text"
          placeholder="Soyad?"
          onChange={(e) => update(e)}
        ></Form.Control>
      </FormGroup>
      <Form.Control
        name="email"
        type="email"
        placeholder="Email?"
        onChange={(e) => update(e)}
      ></Form.Control>
    </Container>
  );
};

export default Form4;
