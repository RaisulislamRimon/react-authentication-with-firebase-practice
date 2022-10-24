import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import app from "../../Hook/firebaseConfig";

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const auth = getAuth(app);
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        props.onHide();
        Swal.fire("Password reset email sent, check your inbox.");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
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
          onBlur={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="email"
        />
        <input
          onClick={handleResetPassword}
          type="submit"
          value="Change password"
          className="btn btn-primary mt-4"
        />
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default ResetPassword;
