import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/images/logo.png";
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

function Header() {
    const { isAuthenticated, userRole, logOut } = useContext(AuthContext);
    
    const handleLogOut = () => {
        logOut();
    };

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" width={50} height={50} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-3">
                        <NavLink to='/dashboard' activeClassName="active">Dashboard</NavLink>
                        {isAuthenticated && userRole === 'admin' && (
                            <NavLink to='/admin'>Admin Panel</NavLink>
                        )}
                        {isAuthenticated && (
                            <>
                                <NavLink to='/users'>Users</NavLink>
                                <NavLink to='/user-info'>User Info</NavLink>
                                <NavLink to='/' onClick={handleLogOut}>Log Out</NavLink>
                            </>
                        )}
                        {!isAuthenticated && (
                            <NavLink to='/login'>Login</NavLink>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
