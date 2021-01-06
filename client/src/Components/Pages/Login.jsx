import React,{useState} from 'react'

function Login() {

    const [User, setUser] = useState({
        username : '',
        password : '',
    })
    const {name , email , password ,password2 , proffession , age , phone,username} = User

    const onchange = (e) => {
        setUser({...User , [e.target.name] : e.target.value});
    }

    const onsubmit = (e) => {
        e.preventDefault();
        if(username === '' || password === ''){
            // setAlert('Please fill the Form');
            console.log('fill the form')
        }else{
            // UserRegister(User);
        }
    }
    return (
        <div className='container register' style={{width:'40%' , marginTop:'10vh'}}>
            <h1 className='text-center'>Register</h1>
            <form onSubmit={onsubmit}>
                <div className='m-lg-3'>
                    <label htmlFor="username">UserName</label>
                    <input className='form-control' type="text" name='username' value={username} onChange={onchange}/>
                </div>
                <div className='m-lg-3'>
                    <label htmlFor="password">Password</label>
                    <input className='form-control' type="password" name='password' value={password} onChange={onchange} minLength='6'/>
                </div>
                <button className='btn btn-primary w-100 m-lg-1'>Login</button>
            </form>
        </div>
    )
}

export default Login