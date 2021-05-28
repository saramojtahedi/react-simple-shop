import React from 'react'
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Navbar className="nav-bg" variant="dark">
                <Container>
                    <Link to="/">
                        <Navbar.Brand href="/" className="nav-logo"> <i class="fa fa-free-code-camp"></i> </Navbar.Brand>
                    </Link>
                    <Nav dir="rtl">
                        <Link className="nav-item py-2" to="/"> صفحه اصلی </Link>
                        <Link className="nav-item py-2" to="/cart"> سبد خرید </Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
