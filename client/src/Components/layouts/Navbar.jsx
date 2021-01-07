import React,{useContext,useEffect}from 'react'
import { Link } from 'react-router-dom';

import AuthContext from '../../Context/Auth/AuthContext';

function NavBar() {

    const authContext = useContext(AuthContext);
    const {isAuthenticated , user , logoutUser} = authContext;

    const ForGuest = () => {
        return <>
            <li class="nav-item">
                <Link class="nav-link" to="/register">Register</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/login">Login</Link>
            </li>
        </>
    }

    useEffect(() => {
        authContext.loadingUser();
    }, []);


    const ForUser = () => {
        return <>
            <li class="nav-item" style={{margin:"0px 100px"}}>
                Hello, <span className='text-danger'>{user.name}</span>
            </li>
            <li class="nav-item">
                <button className='btn btn-danger' onClick={() => {return logoutUser()}}>LogOuT</button>
            </li>
        </>
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to='/'>Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                        {isAuthenticated ? <ForUser/> : <ForGuest/>}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
