import React, { useState } from 'react'
import './Home.css'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'

function Registration() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/auth/register',{username,password})
        .then(result=>{
          navigate('/auth/login')
          console.log(result)
            
    }).catch(err=>console.log(err))
    }
  return (
    <div className='d-flex justify-content-center m-2'>
      <div className='bg-container '>
      <h3 className='home-hd'>Register</h3>
    <div className='log-card m-3 p-2 text-white '>
      
  <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Username</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    onChange={(e)=>setUsername(e.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary m-2">Register</button>
  <Link to='/auth/login'><button type='submit' className='btn btn-success m-2'>Login</button></Link>
</form>
    </div>
    </div>    
    </div>
)
}

export default Registration