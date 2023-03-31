import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import PersonCard from './card'
import data from './people.json'
// <PersonCard />

const Birthday = () => {
    const [people, setPeople] = useState(data)

    const deletePerson = (id) => { 
    const arr = people.filter((item) => item.id !== id)
    setPeople(arr)
    }
   
  return (

    <Container>
        <h1>Bugün doganlar</h1>
        <p>Bugün dogan {people.length} kisi bulundu </p>   
        {people.map( (item)=> <PersonCard {...item} key={item.id} deletePerson={deletePerson}/>)} 

        <Button variant = "danger" onClick={() => setPeople([])}>Remove All</Button> {/*// bos dizi, null problem olusturur*/}
        <Button variant = "light" onClick={() => setPeople(data)}>Reload</Button> 

    </Container>

   
  )
}

export default Birthday