import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    title: '',
    department: '',
    email: '',
    password: '',
    gender: '',
    profileImg: ''
  });
  const [errors, setErrors] = useState({});

  const handleNavigate = (path, e, skipValidation = false) => {
    e.preventDefault();
    if (skipValidation) {
      navigate(path);
      return;
    }
    if (validateForm()) {
      navigate(path);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
      <div style={{ position: 'relative', width: '1250px', height: '500px' }}>
        <img
          src="./images/Rectangle 2.jpg"
          alt="Background"
          style={{ height: '500px', width: '1263px', objectFit: 'cover' }}
        />
        <div>
          <div
            style={{
              height: '700px',
              width: '900px',
              position: 'absolute',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              transform: 'translate(-50%,-50%)',
              padding: '70px',
              top: '50%',
              left: '50%',
              borderRadius: '8px',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
            }}
          >
            <h2 className="text-primary p-3 m-4 text-center size-lg">Register Yourself <br /> Now!</h2>
            <Row>
              {/* Form Fields */}
              <Col md={6} className="d-flex justify-content-center align-items-center">
                <Form.Group className="mb-3" controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Muhammad"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
                </Form.Group>
              </Col>

              <Col md={6} className="d-flex justify-content-center align-items-center">
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Hashir"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
                </Form.Group>
              </Col>

              <Col md={6} className="d-flex justify-content-center align-items-center">
                <Form.Group className="mb-3" controlId="formBasicTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="HOD"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                  {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
                </Form.Group>
              </Col>

              <Col md={6} className="d-flex justify-content-center align-items-center">
                <Form.Group className="mb-3" controlId="formBasicDepartment">
                  <Form.Label>Department</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="IOC"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  />
                  {errors.department && <p style={{ color: 'red' }}>{errors.department}</p>}
                </Form.Group>
              </Col>

              <Col md={6} className="d-flex justify-content-center align-items-center">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="sa@gmail.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </Form.Group>
              </Col>

              <Col md={6} className="d-flex justify-content-center align-items-center">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </Form.Group>
              </Col>

              <Col md={6} className="d-flex justify-content-center align-items-center">
                <Form.Group className="mb-3" controlId="formBasicGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="M/F"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  />
                  {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
                </Form.Group>
              </Col>

              <Col md={6} className="d-flex justify-content-center align-items-center">
                <Form.Group className="mb-3" controlId="formBasicProfileImg">
                  <Form.Label>Profile</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Image URL"
                    name="profileImg"
                    value={formData.profileImg}
                    onChange={handleChange}
                  />
                  {errors.profileImg && <p style={{ color: 'red' }}>{errors.profileImg}</p>}
                </Form.Group>
              </Col>

              {/* Register Button */}
              <Col className="d-flex justify-content-center align-items-center w-100">
                <Button
                  onClick={(e) => handleNavigate('/Login', e)}
                  variant="primary"
                  type="submit"
                  size="lg"
                  className="w-100"
                >
                  Register Now
                </Button>
              </Col>
              
              {/* Link to Login */}
              <p className="text-primary d-flex justify-content-center p-3">
  Don't have an account?  
  <Link onClick={(e) => handleNavigate('/Login', e, true)} style={{ color: 'orange', marginLeft: '3px' }}> 
    Log In
  </Link>
</p>

            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
