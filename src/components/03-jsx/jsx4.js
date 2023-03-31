import React from 'react'

const age = 28;
const aileIzni = true;

const Jsx4 = () => {
  return (
    <div>
{age >=18 &&  <h1>Ehliyet alabilir(AND)</h1>}
{age <=18 ||  <h1>Ehliyet alabilir(OR)</h1>}
{age <18 && aileIzni &&  <h1>Aile izni ile Ehliyet alabilir</h1> //iki sartli kullanim veya daha fazla
} 


    </div>
  )
}

export default Jsx4