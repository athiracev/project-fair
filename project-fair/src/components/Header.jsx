import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header({status}) {
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
            
            <button className='btn btn-outlined-danger'>
            <i className="fa-solid fa-arrow-right-from-bracket" style={{color:'#d12b1f'}}></i>
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
