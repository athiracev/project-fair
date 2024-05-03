import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Add() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [projectData, setProjectData] = useState({
    title: "", overview: "", languages: "", github: "", demo: "", projectImage: ""
  })
  console.log(projectData)

  const [imageStatus,setImageStatus]=useState(false)

  useEffect(() => {
    if(projectData.projectImage.type=='image/jpg' || projectData.projectImage.type=='image/jpeg' || projectData.projectImage.type=='image/png'){
        console.log('image added')
        setImageStatus(false)
    }else{
      console.log("Only JPEG, PNG images are allowed")
      setImageStatus(true)

    }

  },[projectData.projectImage])



  return (
    <>
      <button className='btn btn-info mb-4' onClick={handleShow}>

        Add Project
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>ADD PROJECT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Row>
              <Col>
                <label>
                  <input type="file" onChange={(e) => { setProjectData({ ...projectData, projectImage: e.target.files[0] }) }} style={{ display: 'none' }} />
                  <img className='img-fluid' src="https://th.bing.com/th/id/OIP.vQ5xzow_w7s5NGLSHfe9ogHaGp?rs=1&pid=ImgDetMain" alt="" />
                </label>
                {
                  imageStatus &&
                <p className='text-danger'>Only JPEG, PNG images are allowed</p>

                }
              </Col>
              <Col>
                <div>
                  <FloatingLabel
                    controlId="titleinput"
                    label="Title"
                  // className="mb-3"
                  >
                    <Form.Control type="text" placeholder="project title" onChange={(e) => { setProjectData({ ...projectData, title: e.target.files[0] }) }} />
                  </FloatingLabel>
                  <FloatingLabel controlId="overviewinp" label="Overview">
                    <Form.Control type="text" placeholder="Overview" onChange={(e) => { setProjectData({ ...projectData, overview: e.target.value }) }} />
                  </FloatingLabel>
                  <FloatingLabel controlId="language" label="Language used" >
                    <Form.Control type="text" placeholder="Language used" onChange={(e) => { setProjectData({ ...projectData, languages: e.target.value }) }} />
                  </FloatingLabel>
                  <FloatingLabel controlId="githubinp" label="GitHub Url">
                    <Form.Control type="text" placeholder="GitHub Url" onChange={(e) => { setProjectData({ ...projectData, github: e.target.value }) }} />
                  </FloatingLabel>
                </div>

              </Col>

              <FloatingLabel controlId="demoinp" label="Demo Url">
                <Form.Control type="text" placeholder="Demo Url" onChange={(e) => { setProjectData({ ...projectData, demo: e.target.value }) }} />
              </FloatingLabel>
            </Row>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal >

    </>
  )
}

export default Add

