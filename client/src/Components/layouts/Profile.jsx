import React,{useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../Context/Auth/AuthContext';

function Profile() {

    //Auth Context
    const authContext = useContext(AuthContext)
    const {name,username,email,phone,proffession} = authContext.user;
    
    return (
        authContext.isAuthenticated &&
        <div className='profile'>
            <h2>{username}</h2>
            {name && <div className='userDetails'><i class="fas fa-user icon"></i><h3>{name}</h3></div>}
            {email && <div className='userDetails'><i class="fas fa-envelope icon"></i><h3>{email}</h3></div>}
            {proffession && <div className='userDetails'><i class="fas fa-briefcase icon"></i><h3>{proffession}</h3></div>}
            {phone && <div className='userDetails'><i class="fas fa-phone-volume icon"></i><h3>{phone}</h3></div>}
            <div className='profile-btn'>
                <Link to={`/user/${username}`}><button className='btn btn-primary profilebtn customButton'>View Profile</button></Link>
                <Link to='/publish'><button className='btn btn-warning profilebtn'>Create Article</button></Link>
            </div>
        </div>
    )
}

export default Profile