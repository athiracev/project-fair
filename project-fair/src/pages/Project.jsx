import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'
import ProjectCart from '../components/ProjectCard'
import { allProjects } from '../services/allApis'

function Project() {
  const [projects, setProjects] = useState([])
  const [logStatus, setLogStatus] = useState(false);



  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      getData()
      setLogStatus(true)

    } else {
      console.log("Login ")
      setLogStatus(false)
    }

  }, [])
  console.log(projects)

  const getData = async () => {

    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }

    const result = await allProjects(header)
    console.log(result)
    if (result.status == 200) {
      setProjects(result.data)
    }
    else {
      console.log(result.response.data)
    }

  }



  return (
    <div>
      <Header status={true} />

      <div className='p-5'>
        <div className="d-flex justify-content-between my-4">
          <h1>All Projects</h1>
          <input type='text' name='' className='form-control w-25' placeholder='Enter languages to serach project'></input>

        </div>
        {logStatus ?
          <Row>

            {projects?.length > 0 ?
              projects?.map(item => (
                <Col>

                  <ProjectCart pro={item} />
                </Col>
              ))
              :
              <h2>No project available</h2>
            }

          </Row> :
          <h2 className='text-center text-warning'>Please login first</h2>
        }


      </div>
    </div>
  )
}

export default Project
