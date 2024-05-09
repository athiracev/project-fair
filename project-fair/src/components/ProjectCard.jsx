import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap'
import server_url from '../services/server_url'

function ProjectCard({ pro }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // console.log(pro)


    return (
        <>

            <Card style={{ width: '18rem' }}>
                <Card.Img onClick={handleShow} variant="top" src={pro?.image?`${server_url}/uploads/${pro?.image}`:"https://www.biospace.com/getasset/6c76bbda-c6ff-4cb4-b34a-5bdd06aa1c61/"}  className='img-fluid' />
                <Card.Body>
                    <Card.Title>{pro?.title}</Card.Title>

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
                    <Modal.Title>{pro?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <img src={pro?.image} style={{ width: '100%', height: '250px' }} className='img-fluid' alt="" /></Col>
                        <Col>
                            <h4>{pro?.title}</h4>
                            <p>{pro?.overview}</p>
                            <h6>{pro?.languages}</h6>
                            <div className='mt-3 p-3 d-flex justify-content-between'>

                                <a href={pro?.github}><i className="fa-brands fa-github fa-xl" ></i></a>
                                <a href={pro?.demo}><i className="fa-solid fa-link fa-xl"></i></a>

                            </div>
                        </Col>
                    </Row>
                </Modal.Body>

            </Modal>
        </>

    )
}

export default ProjectCard
