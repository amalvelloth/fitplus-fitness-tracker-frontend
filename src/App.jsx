import React from 'react';
import Navbar from './components/Navbar';
import TaskControl from './components/TaskControl';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

function App() {

  return (
    <>
      <Router>
        <div className="app">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/tasks' element={<TaskControl />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
