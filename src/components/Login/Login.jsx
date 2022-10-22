import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { AuthContext } from "../../authentication/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { userLogIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUserLogIn = ev => {
    ev.preventDefault();
    const form = ev.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogIn(email, password)
      .then(result => {
        const user = result.user;
        form.reset();
        console.log(user);
        navigate("/");
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <Form onSubmit={handleUserLogIn}>
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
            We'll never share your email with anyone else.
          </Form.Text>
        </div>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
