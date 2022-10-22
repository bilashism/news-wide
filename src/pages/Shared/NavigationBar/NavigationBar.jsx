import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../authentication/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(data => {
        console.log(data);
      })
      .catch(err => console.error(err));
  };
  const navbarExpand = "lg";

  return (
    <Navbar
      key={navbarExpand}
      bg="light"
      expand={navbarExpand}
      className="mb-3">
      <Container>
        <Link to="/" className="navbar-brand">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            width={50}
            height={50}>
            <path
              fill="#ECF0F1"
              d="M460.889,422.957H28.661c-9.681,0-17.53-7.849-17.53-17.53V110.28
	c0-11.729,9.508-21.237,21.237-21.237h386.048c11.729,0,21.237,9.508,21.237,21.237V401.72
	C439.652,413.451,449.158,422.957,460.889,422.957z"
            />
            <path
              fill="#E0E0E0"
              d="M500.87,143.672V401.72c0,11.732-9.505,21.237-21.237,21.237h-18.744
	c-11.731,0-21.237-9.505-21.237-21.237V122.435h39.981C491.364,122.435,500.87,131.94,500.87,143.672z"
            />
            <rect
              x="133.61"
              y="137.461"
              fill="#2196F3"
              width="189.217"
              height="47.861"
            />
            <rect
              x="71.001"
              y="274.643"
              fill="#B71C1C"
              width="99.851"
              height="99.617"
            />
            <g>
              <path
                fill="#231F20"
                d="M479.633,111.304h-28.85v-1.024c0-17.848-14.52-32.367-32.367-32.367H32.367
		C14.52,77.913,0,92.433,0,110.28v295.146c0,15.804,12.857,28.661,28.661,28.661h450.972c17.848,0,32.367-14.52,32.367-32.367
		V143.672C512,125.824,497.48,111.304,479.633,111.304z M28.661,411.826c-3.528,0-6.4-2.872-6.4-6.4V110.28
		c0-5.573,4.533-10.106,10.106-10.106h386.048c5.573,0,10.106,4.533,10.106,10.106V401.72c0,3.527,0.568,6.925,1.615,10.106
		L28.661,411.826L28.661,411.826z M489.739,401.72c0,5.573-4.533,10.106-10.106,10.106h-18.744c-5.573,0-10.106-4.533-10.106-10.106
		V133.565h28.85c5.573,0,10.106,4.533,10.106,10.106L489.739,401.72L489.739,401.72z"
              />
              <path
                fill="#231F20"
                d="M385.436,218.713H71.001c-6.147,0-11.13,4.983-11.13,11.13c0,6.147,4.983,11.13,11.13,11.13h314.435
		c6.147,0,11.13-4.983,11.13-11.13C396.566,223.696,391.583,218.713,385.436,218.713z"
              />
              <path
                fill="#231F20"
                d="M133.61,196.452h189.217c6.147,0,11.13-4.983,11.13-11.13v-47.861c0-6.147-4.983-11.13-11.13-11.13
		H133.61c-6.147,0-11.13,4.983-11.13,11.13v47.861C122.479,191.469,127.462,196.452,133.61,196.452z M144.74,148.591h166.956v25.6
		H144.74L144.74,148.591L144.74,148.591z"
              />
              <path
                fill="#231F20"
                d="M170.852,263.513H71.001c-6.147,0-11.13,4.983-11.13,11.13v99.617c0,6.147,4.983,11.13,11.13,11.13
		h99.851c6.147,0,11.13-4.983,11.13-11.13v-99.617C181.983,268.496,176.999,263.513,170.852,263.513z M159.722,363.13h-77.59
		v-77.357h77.59V363.13z"
              />
              <path
                fill="#231F20"
                d="M385.436,268.8H267.13c-6.147,0-11.13,4.983-11.13,11.13s4.983,11.13,11.13,11.13h118.305
		c6.147,0,11.13-4.983,11.13-11.13S391.583,268.8,385.436,268.8z"
              />
              <path
                fill="#231F20"
                d="M223.722,291.061h3.061c6.147,0,11.13-4.983,11.13-11.13s-4.983-11.13-11.13-11.13h-3.061
		c-6.147,0-11.13,4.983-11.13,11.13S217.574,291.061,223.722,291.061z"
              />
              <path
                fill="#231F20"
                d="M385.436,313.322h-0.693c-6.147,0-11.13,4.983-11.13,11.13c0,6.147,4.983,11.13,11.13,11.13h0.693
		c6.147,0,11.13-4.983,11.13-11.13C396.566,318.305,391.583,313.322,385.436,313.322z"
              />
              <path
                fill="#231F20"
                d="M223.722,335.583H347.27c6.147,0,11.13-4.983,11.13-11.13c0-6.147-4.983-11.13-11.13-11.13H223.722
		c-6.147,0-11.13,4.983-11.13,11.13C212.591,330.6,217.574,335.583,223.722,335.583z"
              />
              <path
                fill="#231F20"
                d="M385.436,357.843H223.722c-6.147,0-11.13,4.983-11.13,11.13c0,6.147,4.983,11.13,11.13,11.13
		h161.714c6.147,0,11.13-4.983,11.13-11.13C396.566,362.827,391.583,357.843,385.436,357.843z"
              />
            </g>
          </svg>
        </Link>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${navbarExpand}`}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${navbarExpand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${navbarExpand}`}
          placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${navbarExpand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              {user?.uid ? (
                <NavDropdown
                  title={user?.displayName}
                  id={`offcanvasNavbarDropdown-expand-${navbarExpand}`}>
                  <NavDropdown.Item as={"button"} onClick={handleLogOut}>
                    Log out
                  </NavDropdown.Item>
                  <Link to="/settings" className="dropdown-item">
                    Settings
                  </Link>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>

                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </>
              )}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

            <div className="d-lg-none pt-5">
              <LeftSideNav />
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
