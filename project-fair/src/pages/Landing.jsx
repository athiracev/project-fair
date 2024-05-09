import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { homeProjects } from '../services/allApis'
function Landing() {

  const [token, setToken] = useState("")
  const [projects, setProjects] = useState("")

  useEffect(() => {
    setToken(sessionStorage.getItem("token"))
    getHomePageProjects()
  }, [])

  // console.log(token)


  const getHomePageProjects= async()=>{
    const result = await homeProjects()
    // console.log(result.data)
    if(result.status==200){
      setProjects(result.data)

    }else{
      console.log(result.data)

    }
  }

  return (
    <>
      <div className='w-100 align-items-center d-flex p-5' style={{ height: '100vh', background: 'aqua' }}>
        <Row>
          <Col className='align-items-center d-flex'>
            <div>
              <h1 className='display-4 mb-2 tex-light'> Project Fair</h1>
              <p className='' style={{ textAlign: 'justify' }}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, consequatur?  </p>

              {token ?
                <Link to={'/dash'} className='btn btn-primary'> Manage your Projects </Link>
                :
                <Link to={'/login'} className='btn btn-info'>Explore </Link>

              }

            </div>
          </Col>

          <Col>
            <img className='img-fluid' src="https://online.imt-pm.com/media/6cfe13624f9263e83b9fa3609d27a41b.jpeg" alt="image" />
          </Col>
        </Row>
      </div>


      <div className='p-5 w-100'>
        <h2 className='text-center mt-4 mb-3 '>Check My Projects...</h2>
        <marquee behavior="scroll" direction="left" scrollamount='14'>
          <div className='d-flex justify-content-evenly mt-2'>

            {
              projects.length>0?
              projects.map(item=>(
            <ProjectCard  pro={item}/>

              )):
            <h2>Projects not available</h2>

            }
         
          </div>
        </marquee>

        <div className='text-center'>
          <Link to={'/projects'}>Click for More</Link>
        </div>
      </div>



    </>
  )
}

export default Landing
