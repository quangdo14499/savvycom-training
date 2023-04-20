import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logosavvycom from "../../../../../assets/images/Savvycom-logo.svg";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import Language from "../../../../../assets/images/en.png";

function Header() {
  const Headerall = styled.div`
    position: sticky;
    z-index: 1000;
    top: 0;
    .navbar {
      height: 92px;
      width: auto;
    }
  `;
  const Text = styled.div`
    .nav-link:hover {
      color: #a5b862;
    }
    .nav-link {
      color: #121212;
      font-family: Google Sans, sans-serif;
      font-size: 16px;
      font-weight: 650;
    }
    .apply {
      color: #fff;
      border-radius: 64px;
      background-color: #a5b862;
      font-family: Google Sans, sans-serif;
      font-size: 16px;
      font-weight: 650;
    }
    .apply:hover {
      color: #f7f7f7;
    }
    .navbar {
      width: 95%;
      max-width: 1120px;
      margin: auto;
    }
  `;
  return (
    <Headerall>
      <Navbar bg="light" variant="light">
        <Container>
          <Row className="w-100">
            <Col md={4}>
              <Navbar.Brand href="#home">
                <img src={Logosavvycom} />
              </Navbar.Brand>
            </Col>
            <Col md={8}>
              <Text>
                <Nav className="me-auto d-flex justify-content-around">
                  <Nav.Link href="#jobs ">Jobs</Nav.Link>
                  <Nav.Link href="#features">Abouts Us</Nav.Link>
                  <Nav.Link href="#alleries">Galleries</Nav.Link>
                  <Nav.Link href="#values">Core Values</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                  <Nav.Link className="apply" href="#apply">
                    Apply Now
                  </Nav.Link>
                  <Nav.Link href="#language">
                    <img src={Language} />
                  </Nav.Link>
                </Nav>
              </Text>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </Headerall>
  );
}

export default Header;
