import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="#" className='fs-3 text-centre text-light'>PW-MANAGER</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='text-light bg-secondary'/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 fs-5 " style={{ maxHeight: '100px' }} navbarScroll>
              
            <Nav.Link href="/register" className='text-light'>REGISTER</Nav.Link>
            <Nav.Link href="/" className='text-light'>LOGIN</Nav.Link>
           
         
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;