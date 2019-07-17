import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'react-bootstrap/ModalHeader'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CookiePolicy() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/*<Button variant="primary" onClick={handleShow}>
        Launch demo modal
  </Button>*/}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CookiePolicy;