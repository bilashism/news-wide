import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { AuthContext } from "../../authentication/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState("");

  const { createUser } = useContext(AuthContext);
  const handleUserRegistration = ev => {
    ev.preventDefault();
    const form = ev.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        form.reset();
        setFeedback("");
        console.log(user);
        navigate("/");
      })
      .catch(err => {
        setFeedback(err?.message.replace("Firebase: ", ""));
        console.error(err);
      });
  };
  return (
    <div>
      <Form onSubmit={handleUserRegistration}>
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
          <Form.Control type="text" placeholder="name" name="name" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="photo URL"
          className="mb-3">
          <Form.Control type="url" placeholder="photo URL" name="photoUrl" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </FloatingLabel>

        <div className="">
          <Form.Text className="text-muted">
            {feedback
              ? feedback
              : `We'll never share your email with anyone else.`}
          </Form.Text>
        </div>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label={
              <>
                Check out our <Link to="/terms"> terms and conditions </Link>{" "}
              </>
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
