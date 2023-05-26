import React from 'react'
import Nav from 'react-bootstrap/Nav';

export default function Nav1() {
  return (
    <Nav
      activeKey="/home"
  
    >
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/add'>Additem</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/login'>Login</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
