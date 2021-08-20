import React from 'react';
import './style.scss';
import CartWidged from "../CartwidgedComponent";
import {Nav, Navbar, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import MediaQuery from 'react-responsive'



function NavBarComponent(){

    let tabletOrLess = (matches) => {}
    
    return(

        <div id="modificacionNavbar" >

            <Container id="container" className="col-md-12">

                <Navbar defaultExpanded bg="danger" expand="lg" >
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <MediaQuery maxWidth= {991} onChange={tabletOrLess}>

                        <MediaQuery minWidth= {349}>
                            <Navbar.Brand id="nombreTienda">Naughty Pets</Navbar.Brand>
                        </MediaQuery>
                        <CartWidged className="mr-auto"/>

                    </MediaQuery>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/" >Home</Nav.Link>
                            <Nav.Link as={Link} to="/categoria/Perro adulto" >Perro adulto</Nav.Link>
                            <Nav.Link as={Link} to="/categoria/Perro cachorro" >Perro cachorro</Nav.Link>
                            <Nav.Link as={Link} to="/categoria/Gato adulto" >Gato adulto</Nav.Link>
                            <Nav.Link as={Link} to="/categoria/Gatitos" >Gatitos</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>

                    <MediaQuery minWidth= {991}>
                        <Navbar.Brand  id="nombreTienda">NAUGHTY PETS</Navbar.Brand>
                        <Link to="/Cart"><CartWidged  className="mr-auto"/></Link>
                    </MediaQuery>

                </Navbar>

            </Container>
        </div>
    );
}


export default NavBarComponent;