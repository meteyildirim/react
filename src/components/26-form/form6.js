import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import * as Yup from "yup";

// react-bootstraptan hazir formu al
// npm install formik ve yup (npm install formik yup)
// initila value olustur
// Yup import et ve validation kurallari tanimla
// submi bolumunu yap
// 3 unu formik ile bir araya getir
// formu noValidate yapiyoruz
// forma onSubmit={formik.handleSubmit} tanimla
// {...formik.getFieldProps("email")} ekledik iliskilendirmek icin
// {...formik.getFieldProps("password")} eklendi
// {...formik.getFieldProps("checkbox")}
// https://react-bootstrap.netlify.app/forms/validation/ digerlerine baktik
// oradan bunu gorduk ve ekledik isInvalid={!!errors.username} // renk degistirmesini saglar --kirmizi uyari
// isValid() yesil gecerli anlaminda isValid={!formik.errors.email}
// bir problem var : email yazarken hepsini kirmizi yappar
// engellemek icin  touch isInvalid={formik.touched.email && !!formik.errors.email}  seklinde yaptik

// backend baglantisi icin 
// onSubmit icerisini degistirecegiz
// backend texhpro nun sagladigi bir backend ve customer@carrental.com ve sifreside 12345
// basarili durumda console da tokin gorursun
const Form6 = () => {


const initialValues = {
    email:"",
    password:"", 
    remember:false
}

const validationSchema= Yup.object({
    email: Yup.string().email("Gecerli e posta giriniz").required("Eposta giriniz"),
    password: Yup.string().required("Sifrenizi giriniz")
    

})

const onSubmit = async ( values) => { // async await icin gerekli
    try {
      const resp = await axios.post("https://carrental-v3-backend.herokuapp.com/login", values)
      console.log(resp.data) // gelen response data nin icerisinde gelir
      // gelen token localstarage kaydedelim
      localStorage.setItem("token", resp.data.token) //best practice degil
    } catch (error) {

      alert(error.response.data.message) // kalip bu 
      
    }
}

// 3 unu bir araya getiriyoruz
// 
const formik =useFormik({
    initialValues,
    validationSchema,
    onSubmit
})

return(
<Container className='mt-5'>
<Form noValidate onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...formik.getFieldProps("email")} isInvalid={formik.touched.email && !!formik.errors.email} isValid={!formik.errors.email}/>
        
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...formik.getFieldProps("password")} isInvalid={formik.touched.password && !!formik.errors.password} isValid={!formik.errors.password}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" {...formik.getFieldProps("checkbox")} isInvalid={!!formik.errors.remember} isValid={!formik.errors.remember}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

</Container>


  )
}

export default Form6