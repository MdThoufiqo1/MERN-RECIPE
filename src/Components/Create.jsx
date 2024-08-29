import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import "./Home.css"

function Create() {
    const [recipe,setRecipe]=useState({
        name:"",
        description:"",
        ingredients:"",
        imageurl:"",
        userId: window.localStorage.getItem("id")
    });
    const navigate=useNavigate()
    const handleChange=(event)=>{
        const {name,value}=event.target 
        setRecipe({...recipe,[name]:value})
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault()
        axios.post('http://localhost:3001/recipe/create-recipe', recipe)
        .then(result =>{
            navigate('/')
            console.log(result.data)
            alert('recipe created')
        }).catch(err=>console.log(err))
    }

 
  return (
    <div className='d-flex justify-content-center m-2'>
      <div className='bg-container'>
      <h3 className='home-hd'>Create Recipe</h3>
    <div className='log-card m-3 p-2 text-white m-2'>
      
  <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="Name">Name</label>
    <input type="text" className="form-control" id="Name" aria-describedby="emailHelp" name="name" onChange={handleChange} placeholder='Enter Name'/>
  </div>
  <div className="form-group">
    <label htmlFor="Description">Description</label>
    <input type="text" className="form-control" id="Description" placeholder='Enter Description' name="description" onChange={handleChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="Ingredients">Ingredients</label>
    <input type="text" className="form-control" id="Ingredients" placeholder='Enter Ingredients' name="ingredients" onChange={handleChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="Image URL">Image URL</label>
    <input type="text" className="form-control" id="Image URL" placeholder='Enter Image URL' name="imageurl" onChange={handleChange}/>
  </div>
  <button type="submit" className="btn btn-primary m-2">Submit</button>
</form>
    </div>
    </div>
    </div>
  )
}

export default Create