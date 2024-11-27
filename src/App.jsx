import React from 'react';
import Navbar from './components/Navbar';
import TaskControl from './pages/Taskcontrol';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import TrainingPrograms from './pages/TrainingPrograms';
import Settings from './pages/Settings';
import SignOut from './pages/SignOut';

function App() {

  return (
    <>
      <Router>
        <div className="app">
          <ConditionalNavbar />
          <div className="content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/taskcontrol' element={<TaskControl/>} />
              <Route path='/trainingprograms' element={<TrainingPrograms/>} />
              <Route path='/settings' element={<Settings/>} />
              <Route path='/signout' element={<SignOut/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

function ConditionalNavbar() {
  const location = useLocation();
  const navbarClass = location.pathname === '/' ? 'bg-transparent' : 'bg-[#BAFF00]';

  return <Navbar className={navbarClass}/>
}

export default App
