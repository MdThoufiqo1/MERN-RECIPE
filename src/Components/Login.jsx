import React,{ useState } from 'react'
import './Home.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login (){
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate();

    axios.defaults.withCredentials= true;
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/auth/login',{username,password})
        .then(result=>{
          window.localStorage.setItem("id",result.data.id)
          navigate('/')  
          console.log(result)
    }).catch(err=>console.log(err))
    }
    return (
      <div className='d-flex justify-content-center m-2'>
        <div className='bg-container'>
        <h3 className='home-hd'>Login</h3>
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
      <button type="submit" className="btn btn-primary m-2">Login</button>
      <Link to='/auth/register'><button type='submit' className='btn btn-success m-2'>Register</button></Link>
    </form>
        </div>
        </div>
        </div>
            
    )
}

export default Login