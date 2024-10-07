import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    setValidated(false);
    setError('');

    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    try {
      const response = await axios.get('http://localhost:5000/users');
      const user = response.data.find(user => user.email === formData.email && user.password === formData.password);

      if (user) {
        login(user.role);
        navigate(user.role === 'admin' ? '/admin' : '/dashboard');
      } else {
        setValidated(true);
        setError('Invalid Email or Password');
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) {
      setError('');
    }
    event.target.setCustomValidity('');
  };

  return (
    <div className='login-sec'>
      <Container>
        <h3 className='text-center pt-2'>Sign In</h3>
        <Row className='justify-content-center pt-4'>
          <Col className='bg-light p-4' xl={6}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-4" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" required value={formData.email} onChange={handleChange} name='email' />
                <Form.Control.Feedback type='invalid'>Please provide a valid email</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-4 position-relative" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Password" required value={formData.password} onChange={handleChange} name='password' />
                <Form.Control.Feedback type='invalid'>Please provide a valid password</Form.Control.Feedback>
                <span className='position-absolute end-0 c-point log-icon' onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </Form.Group>
              {error && <div className="text-danger">{error}</div>}
              <Button type='submit' className='mt-3'>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
