import { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
// import "./CreateUserForm.css";

const CreateUserForm = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "admin", // Auto-populated role as "admin"
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/users",
          userData
        );
        console.log(response.data); // handle success response
      } catch (error) {
        console.error(error); // handle error response
      }
    }
  };

  const validateForm = () => {
    const { email, password, confirmPassword } = userData;
    const errors = {};

    if (!emailIsValid(email)) {
      errors.email = "Invalid email address";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div
      className="bg-image"
      style={{
        backgroundImage:
          'url("https://wallpaperboat.com/wp-content/uploads/2020/11/10/60057/shopping-14.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="d-flex justify-content-center align-items-center h-screen">
        <div
          className="bg-blue-200 p-4 rounded-lg"
          style={{ marginRight: "30%" }}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                value={userData.userName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                isInvalid={!!errors.email}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleInputChange}
                isInvalid={!!errors.confirmPassword}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Create User
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateUserForm;
