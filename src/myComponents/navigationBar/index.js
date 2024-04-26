import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import hsbLogo from "../../assets/hsb-logo.png";
import "./index.css";

function Navigationbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img className="navbarCompanyLogo" src={hsbLogo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/services">Services Page</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/web development">Web Development</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/mobile development">
                Mobile Development
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/quality assurance">Quality Assurance & Software Testing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/uiux development">
                UI UX Design
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/fullstack development">Full Stack Development</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/busines analysis services">Business Analysis</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="Industries" id="basic-nav-dropdown">
              <NavDropdown.Item href="/industries">Industries Page</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/industries/manufacturing">Manufacturing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/industries/fintech">
                Fintech
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/industries/healthcare">Healthcare</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/industries/education">
                Education
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/customisable solutions">Customizable Solutions</Nav.Link>
            <Nav.Link href="/lets talk">Lets talk</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
