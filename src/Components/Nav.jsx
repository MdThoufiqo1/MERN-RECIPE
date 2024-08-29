import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparant  m-3">
        <Link to='/' className="navbar-brand ml-4 " >
          Navbar
        </Link>
        <button
          className="navbar-toggler m-3"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item ">
              <Link to='/' className="nav-link m-2 text-white">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link to='/recipes' className="nav-link m-2 text-white" >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link m-2 text-white" to="/recipe/create-recipe">
                Create Recipe
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link m-2 text-white" to="/recipe/saved-recipe">
                Saved Recipe
              </Link>
            </li>
            <Link to='/auth/login'><button className='btn btn-outline-light m-2'>Login</button></Link>
           <Link to='/auth/register'><button className='btn btn-outline-light m-2'>Register</button></Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
/*    */

export default Nav;
