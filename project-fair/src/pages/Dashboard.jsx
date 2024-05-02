import React from 'react'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'
import Add from '../components/Add'
import Edit from '../components/Edit'
import Profile from '../components/Profile'


function Dashboard() {
  return (
    <>
      <Header />
      <div>
        <Row>
          <Col sm={12} md={8} className='p-3'>
            <h3>My Projects</h3>
            <div className='border border- p-4'>
            <Add/>

              <div className='d-flex justify-content-between shadow mb-3 p-5 rounded'>
                
                <h4>Project</h4>
                <div>
                  <a href="" className='btn me-3'>
                    <i className="fa-brands fa-github" style={{ color: "#3b69ba", }} />
                  </a>
                <Edit/>
                  <button className='btn me-3'>
                    <i className="fa-solid fa-trash" style={{ color: "#c3223b", }} />

                  </button>
                </div>


              </div>
            </div>

          </Col >
          <Col sm={12} md={3}>
            <Profile/>
          </Col>
        </Row>
      </div>

    </>
  )
}

export default Dashboard
