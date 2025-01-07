import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Dashboard from './components/Dashboard';
import Getstart from './Pages/Getstart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/getstart" element={<Getstart/>} />
      </Routes>
    </Router>
  );
}

export default App;
