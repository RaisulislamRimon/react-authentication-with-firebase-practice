import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import app from "../../Hook/firebaseConfig";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const auth = getAuth(app);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Forget Password
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Reset your password</h4>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="email"
        />
        <input type="submit" value="Change password" className="btn btn-primary mt-4" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResetPassword;
