import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Modals=(props)=>{
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const [centredModal, setCentredModal] = useState(false);

    const handleClosee = () => setShow(false);
    return(
        <div>
            <Button onClick={handleShow}  style={{width:"20rem",marginTop:"20px", marginBottom:'20px'}} variant="outline-primary">
            {props.tittle}</Button> 
            <Modal
                        show={show}
                        
                        onHide={handleClosee}
                        backdrop="static"
                        keyboard={false}    >

                        <Modal.Header closeButton>
                            <Modal.Title>Post ID: {props.id}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <b>Title:</b> {props.tittle}
                        </Modal.Body>
                        <Modal.Body>
                            <b>Description:</b> {props.desc}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClosee}>
                                Close
                            </Button>
                        </Modal.Footer>
                        </Modal>

        </div>
    )
}

export default  Modals;