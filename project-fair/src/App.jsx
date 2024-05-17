import './App.css'
import './bootstrap.min.css'
import {Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Footer from './components/Footer'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Auth from './pages/Auth'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TokenAuthContext } from './Context_Api/AuthContext'
import { useContext } from 'react'


function App() {
  const{authStatus,setAuthStatus}=useContext(TokenAuthContext)

  return (
    <>
    <Routes>
      <Route path='/'   element={<Landing/> }  />
      <Route path='/dash'   element={authStatus?<Dashboard/>:<Landing/> }  />
      <Route path='/login'   element={<Auth/> }  />
      <Route path='/register'   element={<Register/> }  />
      <Route path='/projects'   element={authStatus?<Project/>:<Landing/> }  />
    </Routes>
    <ToastContainer/>
    
    <Footer/>
    </>
  )
}

export default App
