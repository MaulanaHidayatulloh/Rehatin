import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="m-3 text-center" variant="" onClick={handleShow}>
      Don't have an account yet? <span style={{color: "#468392"}}>sign up</span> now
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header
          closeButton
          className="boder border-bottom-0"
        ></Modal.Header>
        <Modal.Body>
          <Modal.Title className="p-2 text-center fw-bold ">
            Rehatin
          </Modal.Title>
          <Form className="p-5">
            <Form.Group className="mb-3" controlId="inputfirstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="first name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputlastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="last name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Input password" />
            </Form.Group>
            <Button className="w-100 mt-4 shadow" style={{ backgroundColor: "#468392" }}>
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register;
