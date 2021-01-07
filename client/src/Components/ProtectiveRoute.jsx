import React, { useContext} from 'react'
import {Redirect ,Route} from 'react-router-dom'
import AuthContext from '../Context/Auth/AuthContext'

function ProtectiveRoute( {component : Component , ...rest}) {
    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;
    return (
        <Route {...rest} render={props => 
            isAuthenticated ?  (<Component {...props} />) : (<Redirect to='/' />) 
        }/>
    )

}

export default ProtectiveRoute