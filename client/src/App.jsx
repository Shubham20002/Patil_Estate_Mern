import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';

import Profile from './Pages/Profile';
import About from './Pages/About';
import Signup from './Pages/Signup';
import Header from './Component/Header';

export default function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/sign-in' element={<Signin/>}/>
    <Route path='/sign-up' element={<Signup/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/about' element={<About/>}/>
   </Routes>
   </BrowserRouter>
   )
}
