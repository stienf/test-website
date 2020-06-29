import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';



function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        {props.title && <h1 className="display-1 font-weight-bolder text-center">{props.title}</h1>}
                        {props.subtitle && <h3 className="display-4 font-weight-lighter text-center">{props.subtitle}</h3>}
                        <Nav className="justify-content-center">
                            <Link className="nav-link text-info" to="/web-applications">Web Applications</Link>
                            <Link className="nav-link text-info" to="/photography">Photography</Link>
                            <Link className="nav-link text-info" to="/cv">Bekijk mijn CV</Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}

export default Hero;