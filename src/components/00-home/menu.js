import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/hello-world"> Hello World </Link> </li>
            <li><Link to="/Jsx1"> Jsx1 </Link> </li>
            <li><Link to="/Jsx2"> Jsx2 </Link> </li>
            <li><Link to="/Jsx3"> Jsx3 </Link> </li>
            <li><Link to="/Jsx4"> Jsx4 </Link> </li>
            <li><Link to="/Exchange"> Context-Exchange </Link> </li>

        </ul>
    </nav>
  )
}

export default Menu