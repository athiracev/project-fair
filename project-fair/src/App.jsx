import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import {Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Header from './components/Header'
import Footer from './components/Footer'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Auth from './pages/Auth'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <Routes>
      <Route path='/'   element={<Landing/> }  />
      <Route path='/dash'   element={<Dashboard/> }  />
      <Route path='/login'   element={<Auth/> }  />
      <Route path='/register'   element={<Register/> }  />
      <Route path='/projects'   element={<Project/> }  />
    </Routes>
    <ToastContainer/>
    
    <Footer/>
    </>
  )
}

export default App
