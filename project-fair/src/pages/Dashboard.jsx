import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'
import Add from '../components/Add'
import Edit from '../components/Edit'
import Profile from '../components/Profile'
import { userProjects } from '../services/allApis'
import {useNavigate} from 'react-router-dom'


function Dashboard() {
  


  const [user, setUser] = useState('')
  const [userpro, setUserPro] = useState([])
  const navigate= useNavigate()

  useEffect(() => {
    const user= sessionStorage.getItem("username")
    setUser(user)
    if(sessionStorage.getItem("token")){
      getUserProject()

    }else{
      console.log("Login First")
      navigate('/login')

    }
    


  }, [])
  // console.log(user)


  const getUserProject=async()=>{

    const header= {"Authorization":`Bearer ${sessionStorage.getItem('token')} `}

    const result= await userProjects(header)
    console.log(result.data)
    if(result.status==200){
      setUserPro(result.data)

    }
    else{
      console.log(result.response.data)

    }

  }
  // console.log(userpro,"userprojects")
  

  return (
    <>
      <Header />
      <div>
        <Row>
          <Col sm={12} md={8} className='p-3'>
            <h3>My Projects</h3>
            <h4 className='text-center text-success' >Welcome {user}</h4>

            <div className='border border- p-4'>
              <Add />
              

           {userpro?.map(item=>(
               <div className='d-flex justify-content-between shadow mb-3 p-5 rounded'>

               <h4>{item.title}</h4>
               <div>
                 <a href={item.github} className='btn me-3'>
                   <i className="fa-brands fa-github" style={{ color: "#3b69ba", }} />
                 </a>
                 <Edit />
                 <button className='btn me-3'>
                   <i className="fa-solid fa-trash" style={{ color: "#c3223b", }} />

                 </button>
               </div>


             </div>
           ))}
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
