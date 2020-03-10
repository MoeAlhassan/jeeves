import React from "react";
import { Router, Route, Switch } from "react-router-dom";
//import { Container } from "reactstrap";

import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
//import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Tenant from "./views/Tenant";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";

// styles
import "./App.css";
import "./BrowseProp.css";
import "./TenantNav.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/profile/" component={Profile} />
            <PrivateRoute path="/TenantPortal/" component={Tenant} />
          </Switch>
      </div>
    </Router>
  );
};

export default App;
