
import React,{useState , useContext , useEffect} from 'react'
import AuthContext from '../../Context/Auth/AuthContext';

function Register(props) {

    // AuthContext for REgister user
    const authContext = useContext(AuthContext);
    const { UserRegister , setAlert , clearError ,isAuthenticated ,error} = authContext;

    const [User, setUser] = useState({
        name : '',
        email : '',
        proffession : '',
        phone : '',
        age :'',
        username : '',
        password : '',
        password2 : ''
    })
    const {name , email , password ,password2 , proffession , age , phone,username} = User
    const onchange = (e) => {
        setUser({...User , [e.target.name] : e.target.value});
    }


    // onSubmit the Register Form
    const onsubmit = (e) => {
        e.preventDefault();
        if(name === '' || username === '' || password === '' || password2 === '' || email === '' || phone === ''){
            // setAlert('Please fill the Form');
            console.log('fill the form')
        }else if(password !== password2){
            // setAlert('Password MisMatch')
            console.log('pwd missmatch')
        }else{
            UserRegister(User);
        }
    }


    // Checking isAuthenticated or Not
    useEffect(() => {
        if(isAuthenticated){
            props.history.push('/');
        }
        if(error === 'User Already Exists'){
            // setAlert(error,'danger');
            alert('User Exist');
        }
        clearError();
    }, [error , props.history, isAuthenticated])




    return ( 
        <div className='container register' style={{width:'40%' , marginTop:'10vh'}}>
            <h1 className='text-center'>Register</h1>
            <form onSubmit={onsubmit}>
                <div className='m-lg-3'>
                    <label htmlFor="name">Name</label>
                    <input className='form-control' type="text" name='name' value={name} onChange={onchange}/>
                </div>
                <div className='m-lg-3'>
                    <label htmlFor="email">Email</label>
                    <input className='form-control' type="email" name='email' value={email} onChange={onchange}/>
                </div>
                <div className='m-lg-3'>
                    <label htmlFor="proffession">Proffession</label>
                    <input className='form-control' type="text" name='proffession' value={proffession} onChange={onchange}/>
                </div>
                <div className='m-lg-3'>
                    <label htmlFor="phone">Phone</label>
                    <input className='form-control' type="text" name='phone' value={phone} onChange={onchange}/>
                    <label htmlFor="age">Age</label>
                    <input className='form-control' type="text" name='age' value={age} onChange={onchange}/>
                </div>
                <div className='m-lg-3'>
                    <label htmlFor="username">UserName</label>
                    <input className='form-control' type="text" name='username' value={username} onChange={onchange}/>
                </div>
                <div className='m-lg-3'>
                    <label htmlFor="password">Password</label>
                    <input className='form-control' type="password" name='password' value={password} onChange={onchange} minLength='6'/>
                </div>
                <div className='m-lg-3'>
                    <label htmlFor="password">Confirm Password</label>
                    <input className='form-control' type="password" name='password2' value={password2} onChange={onchange} minLength='6'/>
                </div>
                <button className='btn btn-primary w-100 m-lg-1'>Register</button>
            </form>
        </div>
    );
}

export default Register