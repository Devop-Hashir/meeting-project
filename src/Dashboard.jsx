import React from 'react'
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card, Col, Row } from 'react-bootstrap';
import { FaCircle, FaFilter, FaBell, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const [email,setEmail] = useState("")
    const [pas,setPas] = useState("")
 
    const navigate = useNavigate()



    const handleNavigate =(path,e)=>{
      e.preventDefault();
      navigate(path)


      const validEmail = ()=>{

      }

    }
  
    const radios = [
      { name: 'Active', value: '1' },
      { name: 'Radio', value: '2' },
      { name: 'Radio', value: '3' },
    ];

  return (
    <>
    <div className='d-flex'>
    <div className='container'>
      <div>
        <img src="./images/Dashboard.jpg" className='m-2' alt="" />
      </div>
        
       
        <div  style={{ height: '450px',
                 width: '950px',
                 objectFit: 'cover',
                //  position:'absolute',
                 margin:'8px',
                 backgroundColor: 'rgba(255, 255, 255, 0.9)',
                //  transform: 'translate(-50%,-50%)',
                 padding:'10px',
                //  top: '50%',
                //  left:'50%',
                 borderRadius:'8px',
                 boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)'
              
               }}>
        <div className="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked />
  <label className="btn btn-outline-primary w-50" htmlFor="btnradio1">Faculties</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
  <label className="btn btn-outline-primary w-50" htmlFor="btnradio2">Student</label>
</div>

<div>
<Form>
      <Form.Group className="m-3" controlId="formBasicEmail">
        <div style={{ position: 'relative' }}>
          {/* Filter Icon */}
          <FaFilter 
            color="orange" 
            title="Filter" 
            style={{ 
              position: 'absolute', 
              left: '10px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              zIndex: 1 // Ensure it appears above the input
            }} 
          />
          <Form.Control 
            type="search" 
            placeholder="Search" 
            style={{
              background: '#D3D3D3', // Customize the background color
              color: '#000', // Adjust text color for readability
              paddingLeft: '40px', // Add padding to avoid text overlap with icon
            }} 
          />
        </div>
      </Form.Group>
    </Form>
</div>
   
 <div className='d-flex '>
   
 <Card className="d-flex justify-content-center align-items-center" style={{ width: '18rem', margin: "8px", position: 'relative' }}>
      <Card.Body className="text-center">
        {/* Wrapper for the image and online status */}
        <div className='position-relative'>
          {/* Online status container with border */}
          <div className='d-flex align-items-center' style={{
            position: 'absolute',
            top: '5px', // Adjust as needed
            left: '-8px', // Sticks to the left corner
            border: '2px solid #FF9A98',
            borderRadius: '5px',
            padding: '2px',
            backgroundColor: 'white', // Optional: background for visibility
            zIndex: 1, // Ensures it's on top of the image
            fontSize:'12px'
          }}>
            <FaCircle color="red" style={{ width: '5px', marginRight: '5px' }} title="Offline" />
            <p style={{ color: 'red', margin: 0 }}>offline</p>
          </div>
          
          {/* Image */}
          <img src="./images/Rectangle 2.jpg" className="w-50 h-25 mx-3 mb-4 rounded-3" alt="" />
        </div>
        
        <Card.Title>Hamza Shah</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">BS (CS)</Card.Subtitle>
        
        {/* Buttons Container */}
        <div className="d-flex flex-column mt-3">
          <Button variant="outline-primary" className="mb-2">Meet</Button>
          <Button variant="outline-success">View</Button>
        </div>
      </Card.Body>
    </Card>

    <Card className="d-flex justify-content-center align-items-center" style={{ width: '18rem', margin: "8px", position: 'relative' }}>
      <Card.Body className="text-center">
        {/* Wrapper for the image and online status */}
        <div className='position-relative'>
          {/* Online status container with border */}
          <div className='d-flex align-items-center' style={{
            position: 'absolute',
            top: '5px', // Adjust as needed
            left: '-8px', // Sticks to the left corner
            border: '2px solid green',
            borderRadius: '5px',
            padding: '2px',
            backgroundColor: 'white', // Optional: background for visibility
            zIndex: 1, // Ensures it's on top of the image
            fontSize:'12px'
          }}>
            <FaCircle color="green" style={{ width: '5px', marginRight: '5px' }} title="Online" />
            <p style={{ color: 'green', margin: 0 }}>Online</p>
          </div>
          
          {/* Image */}
          <img src="./images/Rectangle 2.jpg" className="w-50 h-25 mx-3 mb-4 rounded-3" alt="" />
        </div>
        
        <Card.Title>Abdullah Shah</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">BS (CS)</Card.Subtitle>
        
        {/* Buttons Container */}
        <div className="d-flex flex-column mt-3">
          <Button variant="outline-primary" className="mb-2">Meet</Button>
          <Button variant="outline-success">View</Button>
        </div>
      </Card.Body>
    </Card>


        </div>
     
 </div>
 </div>

<div 
          style={{
            backgroundColor:'white',
            borderRadius:'8px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
            height:'630px',
            width:'500px',
            margin:'10px',
          }}
>
<div className="d-flex justify-content-end m-2">
      <FaBell color="blue" title="Bell" />
    </div>
    
  
 
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
  <div style={{ position: 'relative', display: 'inline-block' }}>
    {/* Image */}
    <img 
      src="./images/Circle.jpg" 
      alt="Profile" 
      style={{ 
        width: '100px', 
        height: '100px', 
        borderRadius: '50%',       // Makes the image circular
        objectFit: 'cover',        // Ensures the image fills the circle
      }}
    />

    {/* Online Status Icon */}
    <div 
      className="d-flex align-items-center" 
      style={{
        position: 'absolute',
        bottom: '-10px',           // Position from the bottom of the image
        left: '50%',               // Center horizontally
        transform: 'translateX(-50%)', // Adjust position to center
        border: '2px solid green',
        borderRadius: '5px',
        padding: '2px 6px',        // Padding for space around the text
        backgroundColor: 'white', 
        zIndex: 1,
        fontSize: '12px',
      }}
    >
      <FaCircle color="green" style={{ width: '5px', marginRight: '5px' }} title="Online" />
      <p style={{ color: 'green', margin: 0 }}>Online</p>
    </div>
  </div>
</div>
<div style={{textAlign:'center', marginTop:'15px', color:'#00008B'}}>
<h5 >M.Hashir</h5>
<p style={{color:'orange',marginTop:'-5px'}}>HOD</p>
</div>
<div className="d-flex flex-column  p-4"  style={{marginTop:'250px'}}>
          <Button variant="outline-primary" className="mb-2"> <FaUser color="#00008B" title="Profile" style={{        
          padding:'1px',
          marginRight:'7px',
          marginBottom:'3px',      
          }} /> Profile</Button>
          <Button variant="outline-primary" className="mb-2">  <FaCog color="#00008B" title="Settings" style={{        
          padding:'1px',
          marginRight:'7px',
          marginBottom:'3px',      
          }} />   Setting</Button>
          <Button onClick={(e)=>{handleNavigate('/Login',e)}} variant="outline-danger"> <FaSignOutAlt color=" #FF7F7F " title="Log Out" style={{        
          padding:'1px',
          marginRight:'7px',
          marginBottom:'3px',      
          }}  />Log out</Button>
        </div>
</div>
 </div>
       
    </>
  )
}
