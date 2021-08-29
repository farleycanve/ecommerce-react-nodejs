import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import { Link,NavLink} from "react-router-dom";

const Header=(props)=>{
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Link to="/" className="navbar-brand">Admin Dashboard</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <li className="nav-item"><NavLink className="nav-link" to="/signin">Signin</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/signup">Signup</NavLink></li>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    
    )
}
export default Header;