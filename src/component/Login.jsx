import {useState} from 'react'
import '../App.css';

function Login(props) {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleSubmit = (e) =>{ 
    e.preventDefault()
    console.log(`Email: ${email}`)
    console.log(`Password: ${password}`)
}

  return (
       <div className='formContainer'>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label for="email">Email</label>
                <input 
                type='email' 
                placeholder='youremail@gmail.com' 
                id='email' 
                name='email' 
                onChange={(e) => setEmail(e.target.value)}
                value={email}></input>

                <label for="pw">Password</label>
                <input
                type='password' 
                id='pw' 
                name='pw' 
                onChange={(e) => setPassword(e.target.value)}
                value={password}></input>

                <button type='submit'>
                    Log in
                </button>
            </form>

            <button onClick={() =>{props.onFormSwitch('register')}} style={{color:'blue', textDecoration:'none', background:'none'}}>Don't have an account yet? <span style={{color:'blue', fontWeight:'500'}}>Register</span></button>
            
       </div>
    )
}

export default Login