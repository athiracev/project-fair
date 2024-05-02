import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify'
import { userRegister,userLogin } from '../services/allApis';
import {useNavigate} from 'react-router-dom'



function Auth() {

    const [status, SetStatus] = useState(true)
    const navigate = useNavigate()
    const [data, setData] = useState({
        username: "", password: "", email: ""
    })
    console.log(data)

    const changeStatus = () => {
        SetStatus(!status)
    }


    const handleReg = async() => {
        const { username, password, email } = data
        if (!username || !password || !email) {
            toast.warning("Enter valid details!!!")

        }
        else {
            const result= await userRegister(data)
            console.log(result)
           
            if(result.status==201){
                toast.success("User Registration Successfull")
                setData({username:"",password:"",email:""})
                SetStatus(true)
            }else{
                toast.error(result.response.data)
            }



        }
    }


    const handleLogin=async()=>{
        const {email,password}=data
        if(!email || !password){
            toast.warning("Invalid email or password Enter valid data!!!")
        }else{
            const result = await userLogin({email,password})
            console.log(result)
            console.log(result.data.token)
            console.log(result.data.username,"hhhh")
            sessionStorage.setItem("token",result.data.token)
            sessionStorage.setItem("username",result.data.username)
            toast.success("Login Success")
            navigate('/')
        }
    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center w-100' style={{ height: '100vh' }}>
                <div className="shadow border w-50 p-4">
                    <Row >
                        <Col sm={12} md={6}>
                            <img className='img-fluid' src="https://th.bing.com/th/id/OIP.5mO5vFH40akTZQfGN1q7LQHaHa?w=626&h=626&rs=1&pid=ImgDetMain" alt="" />
                        </Col>
                        <Col sm={12} md={6}>
                            {status ?
                                <h4 className=''>Login</h4>
                                :
                                <h4 className=''>Register</h4>

                            }


                            <div className='mt-4'>
                                {!status &&
                                    <FloatingLabel
                                        controlId="user"
                                        label="Username"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="username" onChange={(e) => { setData({ ...data, username: e.target.value }) }} />
                                    </FloatingLabel>
                                }


                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" placeholder="name@example.com" onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" placeholder="Password" onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
                                </FloatingLabel>
                            </div>
                            <div className='mt-3 d-flex justify-content-between'>

                                {status ?

                                    <button className='btn btn-primary' onClick={handleLogin}> Login </button>
                                    :

                                    <button className='btn btn-primary' onClick={handleReg}> Register </button>


                                }

                                <button className='btn btn-link' onClick={changeStatus}>
                                    {status ?

                                        <span>Are you new?</span>
                                        :

                                        <span>Already a User</span>


                                    }

                                </button>
                            </div>
                        </Col>

                    </Row>
                </div>


            </div>
        </>

    )
}

export default Auth
