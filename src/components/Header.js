import { useState } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";
import BigFootLogo from '../app/assets/img/big-fout-logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Navbar sticky="top" expand="md">
      <div class="header-content d-flex justify-content-between">
        <NavbarBrand className="ms-5" href="/">
          <img src={BigFootLogo} alt='Big Foot Logo' className="float-start" />
          <h1 className="mt-1">SquatchesOnlyDotCom</h1>
          <p>Regular folks just don't get it.</p>
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse navbar isOpen={menuOpen}>
          <Nav className='ms-auto' navbar>
            <NavItem>
              <NavLink className='nav-link' to='/store'>
                Store
              </NavLink>
            </NavItem>      
            <NavItem>
              <NavLink className='nav-link' to='/stories'>
                  Success Stories
              </NavLink>
            </NavItem>      
            <NavItem>
              <NavLink className='nav-link' to='/blog'>
                  Blog
              </NavLink>
            </NavItem>      
            <NavItem>
              <NavLink className='nav-link' to='/login'>
                  Sign In
              </NavLink>
            </NavItem>      
            <NavItem>
              <NavLink className='nav-link' to='/signup'>
                  Create Account
              </NavLink>
            </NavItem>      
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  )
}

export default Header