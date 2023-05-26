import React from 'react'
import Nav1 from './units/Nav1'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Additem from './pages/Additem';
import Login from './pages/Login';

export default function App() {
  return (
    <div>
      <Nav1/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Additem />} />
          <Route path="/login" element={<Login />} />
       </Routes>
    </div>
  )
}
