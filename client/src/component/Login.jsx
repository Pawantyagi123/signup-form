import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
export default function Login() {
  const [email, setemail] = useState('')
  const[password, setpassword]=useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3000/login', {email,password})
    .then(result => {console.log(result)
      if(result.data === "success"){
        navigate('/home')
      }
   
    })

    .catch(err => console.log(err))
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
<div className='login'>
<h2>Login</h2>
<form onSubmit={handleSubmit}>
  <div className='login-group'>
<label htmlFor='email'><strong>Email</strong></label>
<input type='email' placeholder='Enter your email' autoComplete='off' name='email' className='input'  onChange={(e) => setemail(e.target.value)}></input>
  </div>
  <div className='login-group'>
<label htmlFor='password'><strong>Password</strong></label>
<input type='password' placeholder='Ente password' autoComplete='off' name='password' className='input'  onChange={(e) => setpassword(e.target.value)}></input>
  </div>
  <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
  <p>Dont have a account &nbsp;
  <Link to="/register">Sign Up</Link></p>
</form>
</div>
    </div>
  )
}
