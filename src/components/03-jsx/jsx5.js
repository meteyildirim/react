import React from 'react'

const names = ["Ali", "Veli", "Ayse", "Fatma"]

const cities = ["istanbul","paris", "izmir","paris"];

const Jsx5 = () => {
  return (
    <div>
        <ul>
            {names.map((name,i) => <li key={i}>{name}</li>)            }
        </ul>

        <select name="" id="">
           {cities.map((city,key) => 
           
           { return <option key ={key} >{city}</option>}
           
           )}
        </select>

    </div>
  )
}

export default Jsx5