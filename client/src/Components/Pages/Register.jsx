
import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../Context/Auth/AuthContext';
import AlertContext from '../../Context/Alert/AlertContext'

function Register(props) {

    // AuthContext for REgister user
    const authContext = useContext(AuthContext);
    const { UserRegister, clearError, isAuthenticated, error } = authContext;

    
    //AlertContext
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;


    // Form Control
    const [User, setUser] = useState({
        name: '',
        email: '',
        proffession: '',
        phone: '',
        age: '',
        username: '',
        password: '',
        password2: ''
    })
    const { name, email, password, password2, proffession, age, phone, username } = User
    const onchange = (e) => {
        setUser({ ...User, [e.target.name]: e.target.value });
    }


    // onSubmit the Register Form
    const onsubmit = (e) => {
        e.preventDefault();
        if (name === '' || username === '' || password === '' || password2 === '' || email === '' || phone === '') {
            setAlert('Fill the form','warning')
        } else if (password !== password2) {
            setAlert('Password Not Same','warning')
        } else {
            UserRegister(User);
        }
    }


    // Checking isAuthenticated or Not
    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
            setAlert('Register SuccesS','success');
        }
        if (error === 'User Already Exists') {
            setAlert('User Already Exists','danger');
        }
        clearError();
    }, [error, props.history, isAuthenticated])




    return (
        <div className='container register glass'>
            <h1 className='text-center '>Register</h1>
            <form onSubmit={onsubmit} className='registerForm'>
                <div class="input-group mb-3">
                    <span class="input-group-text customLabel" id="basic-addon2">Name</span>
                    <input type="text" class="form-control customInputBox"   name='name' value={name} onChange={onchange}/>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text customLabel" id="basic-addon2">Email</span>
                    <input type="email" class="form-control customInputBox"  name='email' value={email} onChange={onchange}/>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text customLabel" id="basic-addon2">Proffession</span>
                    <input type="text" class="form-control customInputBox" name='proffession' value={proffession} onChange={onchange}/>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text customLabel" id="basic-addon2">Phone</span>
                    <input type="text" class="form-control customInputBox"  name='phone' value={phone} onChange={onchange}/>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text customLabel" id="basic-addon2">Age</span>
                    <input type="text" class="form-control customInputBox"  name='age' value={age} onChange={onchange}/>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text customLabel" id="basic-addon2">UserName</span>
                    <input type="text" class="form-control customInputBox"  name='username' value={username} onChange={onchange}/>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text customLabel" id="basic-addon2">Password</span>
                    <input type="password" class="form-control customInputBox"  name='password' value={password} onChange={onchange}/>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text customLabel" id="basic-addon2">Confirm Password</span>
                    <input type="password" class="form-control customInputBox"  name='password2' value={password2} onChange={onchange}/>
                </div>
                <button className='btn btn-primary w-100 m-lg-1 customButton'>Register</button>
            </form>
        </div>
    );
}

export default Register