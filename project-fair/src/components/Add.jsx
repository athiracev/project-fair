import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Add() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <Modal.Title>Add project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Row>
              <Col>
                <label htmlFor="in">
                  <input type="file" id='in'  style={{display:'none'}}/>
                  <img className='img-fluid' src="https://th.bing.com/th/id/OIP.vQ5xzow_w7s5NGLSHfe9ogHaGp?rs=1&pid=ImgDetMain" alt="" />
                </label>
              </Col>
              <Col>
                <div>
                  <FloatingLabel
                    controlId="titleinput"
                    label="Title"
                  // className="mb-3"
                  >
                    <Form.Control type="text" placeholder="project title" />
                  </FloatingLabel>
                  <FloatingLabel controlId="overviewinp" label="Overview">
                    <Form.Control type="text" placeholder="GitHub Url" />
                  </FloatingLabel>
                  <FloatingLabel controlId="language" label="Language used">
                    <Form.Control type="text" placeholder="GitHub Url" />
                  </FloatingLabel>
                  <FloatingLabel controlId="githubinp" label="GitHub Url">
                    <Form.Control type="text" placeholder="GitHub Url" />
                  </FloatingLabel>
                </div>

              </Col>

              <FloatingLabel controlId="demoinp" label="Demo Url">
                <Form.Control type="text" placeholder="Demo Url" />
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

