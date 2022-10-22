import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { AuthContext } from "../../authentication/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { userLogIn } = useContext(AuthContext);
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathName || "/";

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
        setFeedback("");
        navigate(from, { replace: true });
      })
      .catch(err => {
        setFeedback(err?.message.replace("Firebase: ", ""));
        console.error(err);
      });
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
            {feedback
              ? feedback
              : `We'll never share your email with anyone else.`}
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
