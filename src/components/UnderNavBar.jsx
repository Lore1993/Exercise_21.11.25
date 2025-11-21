
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const UnderNavBar = () => {
    return (
          <Navbar className="text-white m-0">
      <Container>
        <Navbar.Brand href="#home" className="text-white me-auto">Tv Shows</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-white">
            <NavDropdown title="Genres" id="basic-nav-dropdown" className="text-white">
              <NavDropdown.Item href="#action/3.1" className="text-white">Romantic</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="text-white">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="text-white">Drama</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className="text-white">
                Thriller
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
         <div className="d-flex align-items-center gap-3 ms-auto">
            <i class="bi bi-grid-3x3"></i>
       <i class="bi bi-columns-gap"></i>
          </div>
      </Container>
    </Navbar>
    )
    
}

export default UnderNavBar;