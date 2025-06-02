import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleNavigate = (path, e, skipValidation = false) => {
    e.preventDefault();
  
    // If skipValidation is true, navigate directly without checking email and password
    if (skipValidation) {
      navigate(path);
      return;
    }
  
    // Validation for email and password
    if (!validEmail(email)) {
      setError("Please enter a valid email");
      return;
    }
    if (password.length < 6 || password.length > 15) {
      setError("Password must be between 6 to 15 characters");
      return;
    }
  
    setError('');
    navigate(path);
  };
  

  return (
    <>
      <div className='d-flex'>
        <div className='container'>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="d-flex w-75">
              
              <div className="d-flex justify-content-center align-items-center" style={{ flex: 1 }}>
                <div className="w-100">
                  <p className="text-danger">Welcome Faculty</p>
                  <h1 className="text-primary pb-3">Login to meet your apprentice</h1>
                  <Form className="mx-auto" style={{ maxWidth: '500px' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                      />
                      <Form.Label>Password</Form.Label>
                    </Form.Group>

                    {/* Error Message */}
                    {error && <p style={{ color: 'red' }} className='mx-5'>{error}</p>}

                    <Button 
                      onClick={(e) => { handleNavigate('/Dashboard', e) }} 
                      variant="primary" 
                      type="submit" 
                      size="lg" 
                      className="w-100"
                    >
                      Log in
                    </Button>
                  </Form>
                  <p className="text-primary d-flex justify-content-center p-3">
  Don't have an account?  
  <Link onClick={(e) => handleNavigate('/Register', e, true)} style={{ color: 'orange', marginLeft: '3px' }}> 
    Register Now
  </Link>
</p>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className="d-flex justify-content-end" style={{ flex: 1 }}>
            <img 
              src="./images/Water.jpg" 
              alt="Water" 
              className="img-fluid" 
              style={{ height: '559px', width: '500px', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </div>
    </>
  );
}
