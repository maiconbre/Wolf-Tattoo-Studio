
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




export const Tatuadores = () => {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Wolf Tattoo Studio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Agendamentos</Nav.Link>
                        <Nav.Link href="#pricing">Equipe</Nav.Link>
                        <NavDropdown title="Tatuadores" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Tatuador 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Tatuador 2
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Tatuador 3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Tatuadores
