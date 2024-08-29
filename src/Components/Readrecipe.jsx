import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import { Link } from 'react-router-dom';

function Readrecipe() {
    const {id}=useParams();
    const [recipe,setRecipe]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001/recipe/recipe-by-id/'+id)
        .then(result=>{
            setRecipe(result.data)
        }).catch(err=>console.log(err))
    },[])
  return (
    <div className='read-bg'>
      <div className='container'>
        <div className='row'>
            <div className='col-12 col-md-6 '>
             <div className='read-card'>   
            <img src={recipe.imageurl} className='image-card' alt="image"/>
            </div>
            </div>
            <div className='col-12 col-md-6 '>
            <h2 className='text-white w-bold'>{recipe.name}</h2>
            <p className=' read-p'>{recipe.description}</p>
            <p className='read-p'>{recipe.ingradients}</p>
            <div className='d-flex flex-row'>
             <button className='btn btn-outline-light m-2'>Save</button>
             <Link to='/recipes'><button className='btn btn-outline-light m-2'>Back</button></Link>

            </div>
            </div>
            
        </div>
        
      </div>
    </div>
  )
}

export default Readrecipe
