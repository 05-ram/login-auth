import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/images/logo.png";
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

function Header() {
    const { logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
    }
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" width={50} height={50} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-3">
                        <NavLink to='/dashboard' activeclassname="active">Dashboard</NavLink>
                        <NavLink to='/admin'>Admin Panel</NavLink>
                        <NavLink to='/users'>Users</NavLink>
                        <NavLink to='/user-info'>Users-Info</NavLink>
                        <NavLink to='/' onClick={handleLogOut}>Log Out</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;