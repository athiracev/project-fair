import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Profile() {
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
                    <label htmlFor="in">
                        <input type="file" id='in' style={{ display: 'none' }} />
                        <img className='img-fluid' src="https://th.bing.com/th/id/R.95c74e73a0802296ef631dd71dfa09d2?rik=eIiF8VmPmhhzXw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-Image.png&ehk=YvjAOG2T71oFU41G13CCoak98yJU3f0YK669MQiOROg%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    </label>
                    <FloatingLabel controlId="username" label="username" >
                        <Form.Control type="text" placeholder="username" />
                    </FloatingLabel>

                    <FloatingLabel controlId="git" label="Git Link">
                        <Form.Control type="text" placeholder="GitLink" />
                    </FloatingLabel>
                    <FloatingLabel controlId="linkedin" label="Linkedin ">
                        <Form.Control type="text" placeholder="Linkedin Link" />
                    </FloatingLabel>


                </div>


            </div>



        </>
    )
}

export default Profile
