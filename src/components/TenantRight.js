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
  Container,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
} from "reactstrap";

//import { useAuth0 } from "../react-auth0-spa";

const TenantRight = () => {
    //     const { loading, user } = useAuth0();
    
    //   if (loading || !user) {
    //     return <Loading />;
    //   }
    
      return (
              <div className="col-md-4 rightside">
                  <div className="SmallBoxTop row">

                  <div class="col-md-12">
                  </div>
                  </div>
                  
                  <div className="SmallBoxBottom row">
                  <div class="col-md-12">
                  </div>
                  </div>
              </div>
      );
}

export default TenantRight;