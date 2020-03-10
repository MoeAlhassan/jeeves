import React, { Fragment } from "react";
import { Container } from "reactstrap";
import SearchBar from "./SearchBar";


const Hero = () => (
  <Fragment>
  <Container className="flex-grow-1 container-fluid browseProp">
  <div className="text-center hero my-5">
    <h2 className="mb-5">Jeeves makes renting <span className="italic">seamless</span>.</h2>
    <SearchBar></SearchBar>
    </div>
  </Container>
  </Fragment>
);

export default Hero;
