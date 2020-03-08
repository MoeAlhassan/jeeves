import React from "react";

import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
   } from 'reactstrap';

const SearchBar = () => {

return (
    <div>
    <InputGroup>
        <Input />
        <InputGroupAddon addonType="append"><Button>Search</Button></InputGroupAddon>
    </InputGroup>
    </div>
    );
}

export default SearchBar;