import React from 'react'
import {removeUserSession } from '../Utils/Common'
import {useHistory} from 'react-router-dom'

function Logout() {
    const history = useHistory();
    
    // handle click event of logout button
     const handleLogout = () => {
        removeUserSession();
        history.push('/');
      }
    return (
        <div>
             
       <input type="button" onClick={handleLogout} value="Logout" />
        </div>
    )
}

export default Logout
