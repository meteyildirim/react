import React, { useContext, useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import StoreContext from "../../store";

// context.js, exchange.js, topbar.js olusturuldu
// src altinda store folder ve icine index.js yapildi
// index.js de context olusturuldu ve disariya acildi
// app.js git ve butun uygulamayi sarmalla
// <StoreContext.Provider value={{}}>  {} iceri sne her yerden ulasmak istedigin funksiyon veya stateleri yaz
// Route ve menu ye exchange ekle
// exchange.js import useContext from 'react' ekle
// onst store = useContext(StoreContext); exchange ekle
// sonra istedigin yerden {store.counter}  seklinde state ulas...
// prob ile state transferine gerek yok
// ikinci state olsuturalim const [currencies, setcurrencies] = useState({})
// simdi apiden data cekelim ve state aktaralim sonra bu state child componentlerde kullanalim
// https://api.frankfurter.app/latest?from=try veya try usd yaparak ...
// try cath ile api ye baglanip datayi aldik
// useEffect icersinde bu ilemi koyduk ki ilk giriste datayi alsin
// currencies state ni tum uygulamalara ac
//chrome inspectden react context eklentisi ile merkezi context gorebilirsin

// input element aldik from https://react-bootstrap.netlify.app/forms/input-group/#rb-docs-content ve context yerlestirdik
// from select yapistir --bootstrap

// ilk basta null degeri dondurmesi 
const Context = () => {

  const [curency, setcurency] = useState("EUR")
  const [amount, setamount] = useState(0)

  const [result, setresult] = useState()

  const store = useContext(StoreContext);
  const {currencies} =store;

//console.log("currencies[curency]", amount /currencies[curency])

  useEffect(() => {
  
  const rslt = (amount / (currencies[curency])).toFixed(3)
  //console.log(rslt)
  setresult(rslt)

  }, [amount,curency])
  
  return (
    <div>
    
      <InputGroup className="mb-3">
  
        <Form.Control value={amount} onChange={(e)=>setamount(e.target.value)} />
        <Form.Select aria-label="Select currency" value={curency} onChange={(e)=>setcurency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </Form.Select>
        <InputGroup.Text id="basic-addon1">{isNaN(result) ?"":result}</InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default Context;
