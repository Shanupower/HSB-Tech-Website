import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import hsbLogo from "../../assets/hsb-logo.png";
import "./index.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

function Navigationbar() {
  const [navBarShow, setNavBarShow] = useState(false);
  const isMd = useMediaQuery("(max-width:1068px)");

  const controlNavbar = () => {
    const scrollThreshold = window.innerHeight * 1;
    if (window.scrollY > scrollThreshold) {
      setNavBarShow(true);
    } else {
      setNavBarShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  return (
    <div
      className={navBarShow ? "navBarContainerShow" : "navBarContainerHide"}
      style={{ zIndex: 1, width: "100%" }}
    >
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{ padding: !isMd && "0 18%" }}
      >
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            padding: ".4rem 0",
          }}
        >
          <div>
            <Link to="/">
              <img className="navbarCompanyLogo" src={hsbLogo} alt="logo" />
            </Link>
          </div>

          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="What We Do" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/services/web development">
                    Web Development
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/services/mobile development">
                    Mobile Development
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.Item href="/services/uiux development">
                    UI UX Design
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/services/fullstack development">
                    Full Stack Development
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/services/quality assurance">
                    Quality Assurance & Software Testing
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/services/busines analysis services">
                    Business Analysis
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Industries" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/industries/fintech">
                    Fintech
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/industries/bsfi">
                    BSFI
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/industries/telecom">
                    Telecom
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/industries/ecommerce">
                    Ecommerce
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/industries/healthcare">
                    Healthcare
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/industries/education">
                    Education
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/industries/realEstate">
                    Real Estate
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/industries/manufacturing">
                    Manufacturing
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/industries/travel-hospitality">
                    Travel and Hospitality
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Technologies" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/technology/nodsJs">
                    NodsJs
                  </NavDropdown.Item>{" "}
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/technology/laravel">
                    Laravel
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/technology/react-native">
                    React Native
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/technology/flutter">
                    Flutter
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/technology/nextJs">
                    NextJs
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/technology/devOps">
                    DevOps
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/technology/graphSQl">
                    GraphSQl
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/technology/postgreSql">
                    PostgreSQL
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/blog">Blogs</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>

          <div>
            <Link
              to="lets_talk"
              style={{
                textDecoration: "none",
                color: "#fff",
                backgroundColor: "#ca0515",
                padding: ".4rem 1.6rem",
                fontSize: "20px",
                fontWeight: "600",
                borderRadius: "8px",
              }}
            >
              Lets talk
            </Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
