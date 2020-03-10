import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Collapse,
  //Container,
  Navbar,
  NavbarToggler,
//   NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
} from "reactstrap";

//import { useAuth0 } from "../react-auth0-spa";

const TenantNav = () => {
  const [isOpen, setIsOpen] = useState(false);
//   const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

//   const logoutWithRedirect = () =>
//     logout({
//       returnTo: window.location.origin
//     });

  return (
      <Navbar className="SubBarParent" color="#ffffff" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto nav-fill w-100 SubBar" navbar>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/TenantPortal/"
                  exact
                  activeClassName="router-link-exact-active-sub"
                >
                  Payments
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/TenantPortal/Maintenance"
                  exact
                  activeClassName="router-link-exact-active-sub"
                >
                  Maintenance
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/TenantPortal/Messages"
                  exact
                  activeClassName="router-link-exact-active-sub"
                >
                  Messages
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/TenantPortal/Applications"
                  exact
                  activeClassName="router-link-exact-active-sub"
                >
                  Applications
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/TenantPortal/Documents"
                  exact
                  activeClassName="router-link-exact-active-sub"
                >
                  Documents
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/TenantPortal/Profile"
                  exact
                  activeClassName="router-link-exact-active-sub"
                  className="subBar-shading"
                >
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  tag={RouterNavLink}
                  to="/TenantPortal/Help"
                  exact
                  activeClassName="router-link-exact-active-sub"
                  className="HelpButton">
                      Get Help
                </Button>
              </NavItem>
            </Nav>
            {/* <Nav className="d-none d-md-block" navbar>
              {!isAuthenticated && (
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    className="btn-margin"
                    onClick={() => loginWithRedirect({})}
                  >
                    Log in
                  </Button>
                </NavItem>
              )}
              {isAuthenticated && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>{user.name}</DropdownItem>
                    <DropdownItem
                      tag={RouterNavLink}
                      to="/profile"
                      className="dropdown-profile"
                      activeClassName="router-link-exact-active"
                    >
                      <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                    </DropdownItem>
                    <DropdownItem
                      id="qsLogoutBtn"
                      onClick={() => logoutWithRedirect()}
                    >
                      <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
                      out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isAuthenticated && (
              <Nav className="d-md-none" navbar>
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    block
                    onClick={() => loginWithRedirect({})}
                  >
                    Log in
                  </Button>
                </NavItem>
              </Nav>
            )}
            {isAuthenticated && (
              <Nav
                className="d-md-none justify-content-between"
                navbar
                style={{ minHeight: 170 }}
              >
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                    />
                    <h6 className="d-inline-block">{user.name}</h6>
                  </span>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="user" className="mr-3" />
                  <RouterNavLink
                    to="/profile"
                    activeClassName="router-link-exact-active"
                  >
                    Profile
                  </RouterNavLink>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="power-off" className="mr-3" />
                  <RouterNavLink
                    to="#"
                    id="qsLogoutBtn"
                    onClick={() => logoutWithRedirect()}
                  >
                    Log out
                  </RouterNavLink>
                </NavItem>
              </Nav>
            )} */}
          </Collapse>
      </Navbar>
  );
};

export default TenantNav;
