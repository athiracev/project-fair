import React, { useEffect, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import server_url from '../services/server_url'

function Profile() {
    const [user, setUser] = useState({
        id: "", username: "", email: "", password: "", github: "", linkdin: "", profile: ""
    })
    const [existingProfile, setExistingProfile] = useState('')
    const [preview, setPreview] = useState('')


    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            const userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
            console.log(userDetails)
            setUser({ id: userDetails._id, username: userDetails.username, email: userDetails.email, password: userDetails.password, github: userDetails.github, linkdin: userDetails.linkedin, profile: "" })
            setExistingProfile(userDetails.profile)
        }

    }, [])

    useEffect(()=>{
        if(user.profile){
            setPreview(URL.createObjectURL(user.profile))
            
        }else{
            setPreview("")
        }

    },[user.profile])

    console.log(user)
    return (
        <>
            <div className='shadow p-5 border border-3 m-3'>
                <div className='d-flex justify-content-between'>
                    <h4>Profile View</h4>
                    <button className='btn'>
                        <i className='fa-solid fa-check ' style={{ color: '#0ae618' }}></i>

                    </button>
                </div>
                <div>
                    <label>

                        <input type="file" id='in' style={{ display: 'none' }}  onChange={(e)=>setUser({...user,profile:e.target.files[0]})}/>
                        {
                            existingProfile == "" ?
                                <img className='img-fluid' width={'200px'} src={preview?preview:"https://th.bing.com/th/id/R.95c74e73a0802296ef631dd71dfa09d2?rik=eIiF8VmPmhhzXw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-Image.png&ehk=YvjAOG2T71oFU41G13CCoak98yJU3f0YK669MQiOROg%3d&risl=&pid=ImgRaw&r=0"} alt="" />

                                :
                                <img className='img-fluid' width={'200px'} src={preview?preview:`${server_url}/uploads/${existingProfile}`} alt="image " />


                        }
                    </label>
                    <FloatingLabel controlId="username" label="username" >
                        <Form.Control type="text" placeholder="username" value={user?.username}  onChange={(e)=>setUser({...user,username:e.target.value})}/>
                    </FloatingLabel>

                    <FloatingLabel controlId="git" label="Git Link">
                        <Form.Control type="text" placeholder="GitLink" value={user?.github}   onChange={(e)=>setUser({...user,github:e.target.value})}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="linkedin" label="Linkedin ">
                        <Form.Control type="text" placeholder="Linkedin Link" value={user?.linkdin} onChange={(e)=>setUser({...user,linkdin:e.target.value})} />
                    </FloatingLabel>


                </div>


            </div>



        </>
    )
}

export default Profile
