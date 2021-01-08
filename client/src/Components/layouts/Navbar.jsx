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
    
    const ForUser = () => {
        return <>
            <li class="navitem lastnav">
                <a href="/"  className='navlink' onClick={() => {return logoutUser()}}>LogOuT</a>
            </li>
        </>
    }
    

    useEffect(() => {
        authContext.loadingUser();
    }, []);


    return (
        <div>
            <nav class="navbar">
                <Link class="logo" to="/">Articles</Link>
                <div class="navbar-navBox" >
                    <ul class="navbar-nav">
                        {isAuthenticated ? <ForUser/> : <ForGuest/>}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
