import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../images/ecom-logo.jpg"
import "./header.css"
import {Link} from 'react-router-dom'



const Header = (props:any) =>{

    return(
        
        <Navbar bg="light" variant="light" fixed="top" className="mb-3" >
        <Container>
        <Navbar.Brand href="#home">
            <img
              src={logo}
              width="80"
              height="70"
              className="d-inline-block align-top"
              alt="e-commerce"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" active={true}><Link to="/">HOME</Link></Nav.Link>
            <NavDropdown title="CATEGORY" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">MOBILES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">LAPTOPS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FASHION</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">COSMETICS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">FOOTWARE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">KIDS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link to="/blog">BLOG</Link></Nav.Link>
            <Nav.Link> <Link to ="/aboutus">ABOUT US</Link> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
         
        </Container>
        <Nav>
        <Nav.Link href="#sign up">SIGN UP</Nav.Link>
        <Nav.Link href="#sign in">SIGN IN</Nav.Link>
        </Nav>
      </Navbar>
    )
}
export default Header;