import React, { useState } from "react";
import { Container, FormGroup, Form, Button } from "react-bootstrap";

// button ekledik
// form metodu ekledik. default get metodu kullanilir
// method=post yazmassak kaydete basinca bilgiler browser linkte gozukur
// ama biz gondermeden once bilgileri kontril edecegiz...
// onun icin once submit-kaydet butonun ozelligini devre disi birakacagiz
//handlesubmit yapalim ve submit butonu ekleyelim
//form onSubmit ozelligini kullandik
// alert("hello") handle icerisnde denedik
// yinede bilgileri gonderiyor..
// default action devre disi birakacagiz
// e.preventDefault(); ekleyince artik submit olmadi
// alert("hello") kaldirdik
// veya try catch kullan ve asagidaki satirlari kaldir
// if (!form.firstName) {
//     alert("adinizi giriniz");
//     return; // return koymazsan tum alertleri ust uste gosterir
//   }
//   if (!form.lastName) {
//       alert("soyadinizi giriniz");
//       return;
//     }

// if (!form.firstName) throw new Error("Adinizi giriniz");  consolda hata mesaji gosterir "adinizi giriniz"
//console.error() kirmizi yazdirir
// email girmeyince html 5 den dolayi, uyari mesaji gelir. bunuda disable yapabiliriz
// forma novalidate diyebiliriz. novalidate ekledik. ama reeact noValidate yazmak gerek


// HATA VAR CALISMADI KONTROL 
const Form5 = () => {


  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',

  });



  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (!form.firstName) throw new Error("Adinizi giriniz");
      if (!form.lastName) throw new Error("Soyadinizi giriniz");
      if (!form.email) throw new Error("Email giriniz");
    // burasi normalde backend baglantisini olacagi yer ama
    // gecici olarak burada belli bir sure sonra bilgileriniz gonderildi mesaji verelim
    setTimeout(() => {
        alert("Bilgiler gonderildi");
        // gonderdikten sonra temizlemesi icin 
        setForm({
            firstName: '',
            lastName: '',
            email: '',
          })
      }, 2000);
    } catch (err) {
      console.log(err);
    }
};

  const update = (e) => {

    const { name, value } = e.target;
    setForm({ ...FormData, [name]: value });
    
  };

  return (
    <Container className="m-5">
      <Form method="post" onSubmit={ handleSubmit} noValidate>

        <FormGroup className="mb-3">
          <Form.Label>Ad</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            placeholder="Adiniz?"
            value={form.firstName}
            onChange={(e) => update(e)}
          >

          </Form.Control>

        </FormGroup>
        <FormGroup className="mb-3">
          <Form.Label>Soyad</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            placeholder="Soyad?"
            value={form.lastName}
            onChange={(e) => update(e)}
          ></Form.Control>
        </FormGroup>

        <FormGroup className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Email?"
            value={form.email}
            onChange={(e) => update(e)}
          ></Form.Control>
        </FormGroup>
        <Button type="submit">Kaydet</Button>
      </Form>
    </Container>
  );
};

export default Form5;
