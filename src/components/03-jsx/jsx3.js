import React from 'react'

// comment satiri
/*
comment blogu
*/

const isAdmin =true;

const Jsx3 = () => {
  return (
    <div>
        {
            isAdmin ? 
            ( 
                <div> 
                    <h2>Admin Menu</h2>
                    <ul>
                        <li>Create User</li>
                        <li>Update User</li>
                        <li>Delete User</li>
                    </ul>
                </div>
            )
            :
            (
                <div>
                    <h2>User Menu</h2>
                    <ul>
                        <li>Login</li>
                        <li>Update User</li>
                        <li>Delete User</li>
                    </ul>
                </div>
            )
        }
    </div>
  )
}

export default Jsx3