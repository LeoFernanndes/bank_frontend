// import { Container, Nav, Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function TopNavbar() {   
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Cadastro</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="/">Logout</Nav.Link>
                </Nav>
                </Container>
            </Navbar>       
    );
}

export default TopNavbar;