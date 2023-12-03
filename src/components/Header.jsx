import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// we are using bootstrap navbar
const Header = () => {
    return (
        <>
            <Navbar sticky = "top" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>Data Visualization Dashboard</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header