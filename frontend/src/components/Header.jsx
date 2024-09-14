import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import SearchBox from './SearchBox';
import logo from '../assets/logo.png'; // Assuming you already have the logo in this path
import { resetCart } from '../slices/cartSlice';
import '../assets/styles/index.css';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const [hovered, setHovered] = useState({ cart: false, user: false });

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(resetCart());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header>
      <Navbar className="bg-custom" variant="dark" expand="lg" collapseOnSelect style={{ padding: '10px 0' }}>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img
              src={logo}
              alt='Meraki__'
              style={{ width: '80px', height: '80px', objectFit: 'contain' }} // Adjust logo size here
            />
            Meraki__
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <SearchBox />

              <Nav.Link
                as={Link}
                to='/cart'
                onMouseEnter={() => setHovered({ ...hovered, cart: true })}
                onMouseLeave={() => setHovered({ ...hovered, cart: false })}
                style={{ color: hovered.cart ? '#F3BF43' : 'white', transition: 'color 0.3s ease' }}
              >
                <FaShoppingCart /> Cart
                {cartItems.length > 0 && (
                  <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </Badge>
                )}
              </Nav.Link>

              {userInfo ? (
                <NavDropdown
                  title={userInfo.name}
                  id='username'
                  onMouseEnter={() => setHovered({ ...hovered, user: true })}
                  onMouseLeave={() => setHovered({ ...hovered, user: false })}
                  style={{ color: hovered.user ? '#F3BF43' : 'white', transition: 'color 0.3s ease' }}
                >
                  <NavDropdown.Item as={Link} to='/profile'>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link
                  as={Link}
                  to='/login'
                  onMouseEnter={() => setHovered({ ...hovered, user: true })}
                  onMouseLeave={() => setHovered({ ...hovered, user: false })}
                  style={{ color: hovered.user ? '#F3BF43' : 'white', transition: 'color 0.3s ease' }}
                >
                  <FaUser /> Sign In
                </Nav.Link>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <NavDropdown.Item as={Link} to='/admin/productlist'>
                    Products
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/orderlist'>
                    Orders
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/userlist'>
                    Users
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
