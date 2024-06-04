import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Register from "../formregister/formregister";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <Button className="py-2 px-4 text-white" variant="" onClick={handleShow}
      style={{backgroundColor: "#215a68"}}>
        Login
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header
          closeButton
          className="boder border-bottom-0"
        ></Modal.Header>
        <Modal.Body>
          <Modal.Title className="p-3 text-center fw-bold ">
            Rehatin
          </Modal.Title>
          <Form className="p-5">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label><strong>Email</strong></Form.Label> */}
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              {/* <Form.Label><strong>Password</strong></Form.Label> */}
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="w-100 mt-4 shadow border-0" style={{ backgroundColor: "#468392" }}>
              Login
            </Button>
            <Register/>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
