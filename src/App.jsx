import { useState } from 'react'
import './App.css'
import Registration from './Components/Registration'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Create from './Components/Create'
import Saved from './Components/Saved'
import Recipes from './Components/Recipes'
import Readrecipe from './Components/Readrecipe'

function App() {
  return(
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/recipes' element={<Recipes/>}></Route>
      <Route path='/auth/register' element={<Registration />}></Route>
      <Route path='/auth/login' element={<Login/>}></Route>
      <Route path='/recipe/create-recipe' element={<Create/>}></Route>
      <Route path='/recipe/saved-recipe' element={<Saved/>}></Route>
      <Route path='/read-recipe/:id' element={<Readrecipe/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
