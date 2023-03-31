import React from 'react'
import Wellcome from './wellcome'
const Greeting = () => {

    
  return (
    <div className="greetings">

        <h1>Greetings Component</h1> 

    <Wellcome firstName="Ali" lastName="Bey" />
    <Wellcome firstName="Ayse" lastName="Hanim" />

    </div>
  )
}

export default Greeting;