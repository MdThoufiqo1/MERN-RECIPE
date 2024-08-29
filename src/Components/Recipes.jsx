import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";


const Recipes = () => {
    const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/recipe/recipes")
      .then((recipes) => {
        setRecipe(recipes.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container">
      <div className="row ">
        <div className="col-12 text-center">
        <h2 className="home-hd">Recipes</h2>
        </div>
        <div className="col-12 text-center reci-card">  
        {recipe.map((recipe) => (
          <div key={recipe._id} className="col-md-3 d-flex text-center">
            <div className=" card  p-2 m-2">
              <img src={recipe.imageurl} className="card-img-top" height='180px'  alt="..." />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <Link to={`/read-recipe/${recipe._id}`}><button href="#" className="btn btn-primary">
                  Read more
                </button>
                </Link>
                </div>
            </div>
            </div>
          
        ))}
        </div>
      </div>
      </div>
    </>
  )
}

export default Recipes

