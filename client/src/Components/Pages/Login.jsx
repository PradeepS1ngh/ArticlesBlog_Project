import React,{useState , useContext , useEffect} from 'react'

import AuthContext from '../../Context/Auth/AuthContext';
import AlertContext from '../../Context/Alert/AlertContext'

function Login(props) {

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { loginUser , clearError ,isAuthenticated ,error} = authContext;

    const [User, setUser] = useState({
        username : '',
        password : '',
    })
    const {password,username} = User
    const onchange = (e) => {
        setUser({...User , [e.target.name] : e.target.value});
    }


    // onSubmit the login Form
    const onsubmit = (e) => {
        e.preventDefault();
        if(username === '' || password === ''){
            setAlert('fill the form','warning')
        }else{
            loginUser(User);
            setAlert('Login SuccesS','success');
        }
    }


    // Checking isAuthenticated or Not
    useEffect(() => {
        if(isAuthenticated){
            props.history.push('/');
        }else if(error === 'Invalid Credentials'){
            setAlert('Invalid Credentials','danger');
        }else if(error === 'Invalid Credentials Password Not Match'){
            setAlert('Password InCorrect','danger');
        }
        clearError();
    }, [isAuthenticated,error,props.history])




    return (
        <div className='container register' style={{width:'40%' , marginTop:'10vh'}}>
            <h1 className='text-center'>Login</h1>
            <form onSubmit={onsubmit} className='registerForm'>

                <div class="input-group mb-3">
                    <span class="input-group-text customLabel" id="basic-addon2">UserName</span>
                    <input type="text" class="form-control customInputBox"  name='username' value={username} onChange={onchange}/>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text customLabel" id="basic-addon2">Password</span>
                    <input type="password" class="form-control customInputBox"  name='password' value={password} onChange={onchange}/>
                </div>

                <button className='btn btn-primary w-100 m-lg-1 customButton'>Login</button>
            </form>
        </div>
    )
}

export default Login