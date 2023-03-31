import React, { useEffect, useState } from 'react'
import { Container, FormGroup, Form } from 'react-bootstrap'

const Form2 = () => {

    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [sum, setSum] = useState("")

    useEffect(() => {
      setSum(Number(num1)+Number(num2))
    

    }, [num1, num2])
    

  return (
    
    <Container className='m-5'>
        <FormGroup>
            <Form.Control type="number" onChange={(e)=>setNum1(e.target.value)} value={num1}></Form.Control>
        </FormGroup>
        <FormGroup>
            <Form.Control type="number" onChange={(e)=>setNum2(e.target.value)} value={num2}></Form.Control>
        </FormGroup>
        <FormGroup>
            <Form.Control type="number" value={sum}></Form.Control>
        </FormGroup>
    </Container>
  )
}

export default Form2