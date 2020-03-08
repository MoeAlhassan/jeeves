import React from "react";

import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
   } from 'reactstrap';

const SearchBar = () => {

return (
    <div className="col-lg-7 buttonSize">
    <InputGroup>
        <Input placeholder="Search for your next place, try: 3 bed in East End with a yard" />
        <InputGroupAddon addonType="append"><Button className="searchButton">Search</Button></InputGroupAddon>
    </InputGroup>
    </div>
    );
}

export default SearchBar;