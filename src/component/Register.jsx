import {React, useState} from 'react'
import '../App.css';

function Register(props) {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [phone, setPhone] = useState('')

const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Password: ${password}`)
    console.log(`Phone: ${phone}`)
    
}

  return (
    <div className='formContainer'>
            <form className='regisForm' onSubmit={handleSubmit}>
            <label style={{color:'white'}} for="name">Name</label>
                <input 
                type='text' 
                placeholder='Enter your full name' 
                id='name' 
                name='name' 
                onChange={(e) => setName(e.target.value)}
                value={name}></input>
                
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

                <label for="phone">Phone Number</label>
                <input
                type='text' 
                placeholder='08123456789'
                id='phone' 
                name='phone' 
                onChange={(e) => setPhone(e.target.value)}
                value={phone}></input>

                <button type='submit'>
                    Register
                </button>
            </form>

            <button onClick={() =>{props.onFormSwitch('login')}} style={{color:'blue', textDecoration:'none', background:'none'}}>Already have an account? <span style={{color:'blue', fontWeight:'500'}}>Log in</span></button>
            
       </div>
  )
}

export default Register