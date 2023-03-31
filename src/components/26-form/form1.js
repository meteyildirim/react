import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'

// formu olusturduk
// formdan bilgileri almak icin state tanimlanir
// useState ile bu text box iliskilendirmek icin onChange kullandik
// onChange de e deisikligi yakalar, e.target olayin objesini bulur, e.target.value



const Form1 = () => {

    const [name, setName] = useState("")

  return (
    
    <Container className='mt-5'>
        <h1>Merhaba {<span style={{color:"red"}}>{name}</span>}</h1>
        <Form>
            <Form.Control type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} />
        </Form>
    </Container>
  )
}

export default Form1