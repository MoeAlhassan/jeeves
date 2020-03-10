import React from "react";
// import { Container, Row, Col } from "reactstrap";

// import Highlight from "../components/Highlight";
// import Loading from "../components/Loading";
// import { useAuth0 } from "../react-auth0-spa";
import TenantNav from "../components/TenantNav";
import TenantLeft from "../components/TenantLeft";
import TenantRight from "../components/TenantRight";
import { Container } from "reactstrap";

const Tenant = () => {
//     const { loading, user } = useAuth0();

//   if (loading || !user) {
//     return <Loading />;
//   }

  return (
      <React.Fragment>
          <TenantNav/>
          <Container className="TenantContainer">
          <div className="row row-eq-height">
          <TenantLeft/>
          <TenantRight/>
          </div>
          </Container>
    </React.Fragment>
  );
}

export default Tenant;