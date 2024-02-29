import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './home.css'

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/register', { email, name, password })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => {
        if (err.response && err.response.data && err.response.data.error) {
          // Display alert message if error message is received from the server
          alert(err.response.data.error);
        } else {
          console.error(err);
        }
      });
  }

  
  

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
  <div className='sign'>
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='name'><strong>Name</strong></label>
        <input type='text' placeholder='Enter your name' autoComplete='off' name='name' className='input' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='form-group'>
        <label htmlFor='email'><strong>Email</strong></label>
        <input type='email' placeholder='Enter your email' autoComplete='off' name='email' className='input' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='form-group'>
        <label htmlFor='password'><strong>Password</strong></label>
        <input type='password' placeholder='Enter password' autoComplete='off' name='password' className='input' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-success w-100 rounded-1">Register</button>
    </form>
    <p className="para">Already have an account? <Link to="/login">Login</Link></p>
  </div>
</div>


    
  );
}
