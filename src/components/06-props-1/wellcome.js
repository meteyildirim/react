import React from 'react'
import './wellcome.scss'

const Wellcome = (props) => {
  
    // Wellcome = ({firstName, lastName}) // seklindede props acilabilir
    // const {firstName, lastName} = props; // her yerde props. kulanmak istiyorsan boyle yap

    return (
    <div className="wellcome">
        <h2>Wellcome {props.firstName} {props.lastName} </h2>
    </div>
  )
}

export default Wellcome;