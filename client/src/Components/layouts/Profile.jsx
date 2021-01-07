import React,{useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'

import AuthContext from '../../Context/Auth/AuthContext';

function Profile() {
    const authContext = useContext(AuthContext)
    const {name,username,email,phone,proffession} = authContext.user;
    return (
        authContext.isAuthenticated &&
        <div className='text-center text-light'>
            <h6>{name}</h6>
            <h8>{username}</h8>
            <h3>{proffession}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to='/publish'><button className='btn btn-warning'>Create Article</button></Link>
        </div>
    )
}

export default Profile