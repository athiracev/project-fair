import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap'

function ProjectCard() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Card style={{ width: '18rem' }}>
                <Card.Img onClick={handleShow} variant="top" src="https://wallpaperaccess.com/full/5137780.jpg" />
                <Card.Body>
                    <Card.Title>Project1</Card.Title>

                </Card.Body>
            </Card>


            {/* modal */}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <img src="https://wallpaperaccess.com/full/5137780.jpg" className='img-fluid' alt="" /></Col>
                        <Col>
                            <h4>Project1</h4>
                            <p>Overview Content</p>
                            <h6>Languages Used</h6>
                            <div className='mt-3 p-3 d-flex justify-content-between'>

                                <a href=""><i className="fa-brands fa-github fa-xl" ></i></a>
                                <a href=""><i className="fa-solid fa-link fa-xl"></i></a>

                            </div>
                        </Col>
                    </Row>
                </Modal.Body>

            </Modal>
        </>

    )
}

export default ProjectCard
