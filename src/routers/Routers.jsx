import React from 'react'
import {Routes, Route} from "react-router-dom";
import Login from './../components/login/login';
import SignUp from './../components/SignUp/SignUp';
import Home from './../Pages/home/Home';

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default Routers