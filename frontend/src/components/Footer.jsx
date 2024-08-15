import { Container, Row, Col, Button } from 'react-bootstrap';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container fluid style={{ backgroundColor: '#dc3545', color: 'white', padding: '3rem 0' }}>
        <Row className="text-center">
          <Col xs={12} sm={6} md={3} className="d-flex flex-column align-items-center">
            <h6 style={{ marginBottom: '1.5rem' }}>Company</h6>
            <Button variant="link" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>About</Button>
            <Button variant="link" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>Blog</Button>
            <Button variant="link" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>Jobs</Button>
            <Button variant="link" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>Press</Button>
            <Button variant="link" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>Partners</Button>
          </Col>

          <Col xs={12} sm={6} md={3} className="d-flex flex-column align-items-center">
            <h6 style={{ marginBottom: '1.5rem' }}>Solutions</h6>
            <Button variant="link" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>Marketing</Button>
            <Button variant="link" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>Analytics</Button>
            <Button variant="link" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>Insights</Button>
            <Button variant="link" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>Supports</Button>
          </Col>

          <Col xs={12} sm={6} md={3} className="d-flex flex-column align-items-center">
            <h6 style={{ marginBottom: '1.5rem' }}>Documentation</h6>
            <Button variant="link" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>Guides</Button>
            <Button variant="link" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>API Status</Button>
          </Col>

          <Col xs={12} sm={6} md={3} className="d-flex flex-column align-items-center">
            <h6 style={{ marginBottom: '1.5rem' }}>Legal</h6>
            <Button variant="link" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>Claim</Button>
            <Button variant="link" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>Privacy</Button>
            <Button variant="link" style={{ color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.5rem' }}>Terms</Button>
          </Col>
        </Row>

        <Row className="text-center mt-3">
          <Col>
            <p>&copy; {currentYear} My Company. All rights reserved.</p>
            <p>Made with love by Me.</p>
            <p>
              Icons made by{" "}
              <a href="https://www.freepik.com" style={{ color: 'white', textDecoration: 'underline' }}>
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" style={{ color: 'white', textDecoration: 'underline' }}>
                www.flaticon.com
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
