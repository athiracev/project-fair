import React from 'react'
import Header from '../components/Header'
import {Row,Col} from 'react-bootstrap'
import ProjectCart from '../components/ProjectCard'

function Project() {
  return (
    <div>
      <Header status={true}/>

      <div className='p-5'>
        <h1>All Projects</h1>
        <Row>
          <Col>
          <ProjectCart  />
          </Col>
        </Row>

      </div>
    </div>
  )
}

export default Project
