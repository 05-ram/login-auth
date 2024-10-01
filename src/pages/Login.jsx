import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [validated, setValidated] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className='login-sec'>
            <Container>
                <h3 className='text-center pt-2'>Sign In</h3>
                <Row className='justify-content-center pt-4'>
                    <Col className='bg-light p-4' xl={6}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" required />
                                <Form.Control.Feedback type='invalid'>Please provide a valid email</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-4 position-relative" controlId="exampleForm.ControlInput1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Password" required />
                                <Form.Control.Feedback type='invalid'>Please provide a valid password</Form.Control.Feedback>
                                <span className='position-absolute end-0 me-3 c-point log-icon' onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye /> : <FaEyeSlash />
                                    }
                                </span>
                            </Form.Group>
                            <Button type='submit' className='mt-3'>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div >

    )
}

export default Login;

//14.21