import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TokenAuthContext } from '../Context_Api/AuthContext';

function Header({status}) {

  const{authStatus,setAuthStatus}=useContext(TokenAuthContext)


  const navigate = useNavigate()
  const handleLogout=()=>{
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('userDetails')
    navigate('/')
    setAuthStatus(false)
    

    
  }


  return (
    <div>
     
   <Navbar className="bg-body-tertiary">
        <Container className='d-flex justify-content-between'>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-diagram-project" style={{color:'#032e77'}}></i>

           {' '}
            Project Fair
          </Navbar.Brand>
          <div>
            {!status && 
            
            <button className='btn btn-outlined-danger' onClick={handleLogout}>
            <i className="fa-solid fa-arrow-right-from-bracket"  style={{color:'#d12b1f'}}></i>
            Logout
            </button>
            }
           
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
