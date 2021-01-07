import React,{useContext,useEffect}from 'react'
import { Link } from 'react-router-dom';

import AuthContext from '../../Context/Auth/AuthContext';

function NavBar() {

    const authContext = useContext(AuthContext);
    const {isAuthenticated , user , logoutUser} = authContext;

    const ForGuest = () => {
        return <>
            <li class="navitem">
                <Link class="navlink " to="/login">Login</Link>
            </li>
            <li class="navitem">
                <Link class="navlink lastnav" to="/register">Sign-up</Link>
            </li>
        </>
    }

    useEffect(() => {
        authContext.loadingUser();
    }, []);


    const ForUser = () => {
        return <>
            {/* <li class="navitem" style={{margin:"0px 100px"}}>
                Hello, <Link to={`/user/${user.username}`}><button className='btn btn-primary'>{user.name}</button></Link>
            </li> */}
            <li class="navitem lastnav">
                <a href="/"  className='navlink' onClick={() => {return logoutUser()}}>LogOuT</a>
            </li>
        </>
    }

    return (
        <div>
            <nav class="navbar">
                <Link class="logo" to="/">Articles</Link>
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div class="navbar-navBox" >
                    <ul class="navbar-nav">
                        {/* <li class="nav-item active">
                            <Link class="nav-link" to='/'>Home <span class="sr-only">(current)</span></Link>
                        </li> */}
                        {/* <li class="navitem">
                            <Link class="navlink" to="/about">About</Link>
                        </li> */}
                        {isAuthenticated ? <ForUser/> : <ForGuest/>}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
