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
            {name && <div className='m-2'><i class="fas fa-user userImage"></i><>{name}</></div>}
            {email && <div className='m-2'><i class="fas fa-envelope userImage"></i><>{email}</></div>}
            {proffession && <div className='m-2'><i class="fas fa-briefcase userImage"></i><>{proffession}</></div>}
            {phone && <div className='m-2'><i class="fas fa-phone-volume userImage"></i><>{phone}</></div>}
            <div className='profile-btn'>
                <Link to={`/user/${username}`}><button className='btn btn-primary profilebtn customButton'>View Profile</button></Link>
                <Link to='/publish'><button className='btn btn-warning profilebtn'>Create Article</button></Link>
            </div>
        </div>
    )
}

export default Profile