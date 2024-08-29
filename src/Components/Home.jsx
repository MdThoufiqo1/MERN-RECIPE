import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";


function Home() {

  return (
    <>
    <div className="bg-card ">
    <div className="Container">
      <div className="row">
        <div className="col-12 ">
          <div className="d-flex flex-column justify-content-end">
          <div className="bg-container">
            <h1 className="home-hd">A Chef In Every Tasty Meal Box</h1>
            <p className="Home-pa">Get pre-portioned ingredients for meal kits best recipes</p> 
             <Link to='/recipes'><button className="btn btn-outline-light p-2 m-3">view menu</button></Link>
            </div>        
        </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Home;
