import React, { useEffect, useState, useContext } from 'react'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'
import Add from '../components/Add'
import Edit from '../components/Edit'
import Profile from '../components/Profile'
import { deleteProject, userProjects } from '../services/allApis'
import { addProjectResponseContext, editProjectResponseContext } from '../Context_Api/Contextapis'
import { toast } from 'react-toastify'

function Dashboard() {

  const { addProjectResponse, setAddProjectResponse } = useContext(addProjectResponseContext)
  const { editProjectResponse, setEditProjectResponse } = useContext(editProjectResponseContext)

  const [user, setUser] = useState('')
  const [userpro, setUserPro] = useState([])
  6
  useEffect(() => {
    const user = sessionStorage.getItem("username")
    setUser(user)
    if (sessionStorage.getItem("token")) {
      getUserProject()
    }
  }, [addProjectResponse, editProjectResponse])
  // console.log(user)


  const getUserProject = async () => {

    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')} ` }

    const result = await userProjects(header)
    console.log(result.data)
    if (result.status == 200) {
      setUserPro(result.data)

    }
    else {
      console.log(result.response.data)

    }
  }
  // console.log(userpro,"userprojects")


  const handleDelete = async (id) => {
    const token = sessionStorage.getItem('token')
    const header = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
    
    const result = await deleteProject(id, header)
      if (result.status == 200) {
        toast.success('Project deleted successfully')
        getUserProject()
      }


  }

  return (
    <>
      <Header />
      <div>
        <Row>
          <Col sm={12} md={8} className='p-3'>
            <h3>My Projects</h3>

            <h3 className='text-center text-success' >Hi <span >{user}</span>  Welcome Back
              <i className="fa-solid fa-face-smile d-flex align-items-center" style={{ color: '#FFD43B', marginRight: '300px' }}></i></h3>

            <div className='border border- p-4'>
              <Add />


              {
                userpro.length > 0 ?

                  userpro.map(item => (
                    <div className='d-flex justify-content-between shadow mb-3 p-5 rounded'>

                      <h4>{item.title}</h4>
                      <div>
                        <a href={item.github} className='btn me-3'>
                          <i className="fa-brands fa-github" style={{ color: "#3b69ba", }} />
                        </a>
                        <Edit project={item} />
                        <button className='btn me-3' onClick={(e) => { handleDelete(item._id) }}>
                          <i className="fa-solid fa-trash" style={{ color: "#c3223b", }} onClick={handleDelete(item.id)} />

                        </button>
                      </div>


                    </div>
                  )) :
                  <h3 className='text-center'>No projects Available</h3>}
            </div>

          </Col >
          <Col sm={12} md={3}>
            <Profile />
          </Col>
        </Row>
      </div>

    </>
  )
}

export default Dashboard
