import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import base_url from '../services/server_url';
import { editProject } from '../services/allApis';
import { toast } from 'react-toastify';
import { editProjectResponseContext } from '../Context_Api/Contextapis';


function Edit({ project }) {

    console.log(project)

    const { editProjectResponse, setEditProjectResponse } = useContext(editProjectResponseContext)

    const [projectData, setProjectData] = useState({
        id: project._id, title: project.title, overview: project.overview, language: project.languages, github: project.github, demo: project.demo, projectImage: ""
    })
    console.log(projectData)

    const [imageStatus, setImageStatus] = useState(false)
    const [preview, setPreview] = useState('')



    useEffect(() => {
        if (projectData.projectImage.type == 'image/jpg' || projectData.projectImage.type == 'image/jpeg' || projectData.projectImage.type == 'image/png') {
            setImageStatus(false)
            setPreview(URL.createObjectURL(projectData.projectImage))
        } else {
            setImageStatus(true)
            setPreview("")
        }

    }, [projectData.projectImage])

    const handleUpdate = async () => {
        console.log(projectData)
        const { title, overview, language, github, demo } = projectData
        if (!title || !overview || !language || !github || !demo) {
            toast.warning("invalid input !! Enter valid input data")

        } else {
            const formData = new FormData()
            formData.append("title", title)
            formData.append("overview", overview)
            formData.append("language", language)
            formData.append("github", github)
            formData.append("demo", demo)
            preview ? formData.append("image", projectData.projectImage) : formData.append("image", project.image)

            const token = sessionStorage.getItem("token")

            if (preview) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`

                }
                const result = await editProject(projectData.id, formData, reqHeader)
                if (result.status == 200) {
                    toast.success(`${projectData.title} updated successfully`)
                    handleClose()
                    setEditProjectResponse(result)
                } else {
                    toast.warning(`${projectData.title} updation failed due to some reason`, result.response.data)
                }
            } else {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                const result = await editProject(projectData.id, formData, reqHeader)
                if (result.status == 200) {
                    toast.success(`${projectData.title} updated successfully`)
                    handleClose()
                    setEditProjectResponse(result)


                } else {
                    toast.warning(`${projectData.title} updation failed due to some reason `, result.response.data)
                }
            }
        }
    }

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setPreview("")
        setProjectData({
            id: project._id, title: project.title, overview: project.overview, language: project.languages, github: project.github, demo: project.demo, projectImage: ""
        })

    };
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn me-3' onClick={handleShow}>
                <i className="fa-solid fa-pen-to-square" style={{ color: "#3568c0", }} />

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
                                <label >
                                    <input type="file" id='in' onChange={(e) => { setProjectData({ ...projectData, projectImage: e.target.files[0] }) }} style={{ display: 'none' }} />
                                    <img className='img-fluid' src={preview ? preview : `${base_url}/uploads/${project.image}`} alt="" />
                                </label>
                                {imageStatus &&
                                    <p className='text-danger'>Image extension Invalid! Image should be JPG,JPEG or PNG!!</p>
                                }
                            </Col>
                            <Col>
                                <div>
                                    <FloatingLabel
                                        controlId="titleinput"
                                        label="Title"
                                    // className="mb-3"
                                    >
                                        <Form.Control type="text" value={projectData.title} onChange={(e) => { setProjectData({ ...projectData, title: e.target.value }) }} placeholder="project title" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="overviewinp" label="Overview">
                                        <Form.Control type="text" value={projectData.overview} onChange={(e) => { setProjectData({ ...projectData, overview: e.target.value }) }} placeholder="GitHub Url" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="language" label="Language used">
                                        <Form.Control type="text" value={projectData.language} onChange={(e) => { setProjectData({ ...projectData, language: e.target.value }) }} placeholder="GitHub Url" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="githubinp" label="GitHub Url">
                                        <Form.Control type="text" value={projectData.github} onChange={(e) => { setProjectData({ ...projectData, github: e.target.value }) }} placeholder="GitHub Url" />
                                    </FloatingLabel>
                                </div>

                            </Col>

                            <FloatingLabel controlId="demoinp" label="Demo Url">
                                <Form.Control type="text" value={projectData.demo} onChange={(e) => { setProjectData({ ...projectData, demo: e.target.value }) }} placeholder="Demo Url" />
                            </FloatingLabel>
                        </Row>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>Update</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Edit
