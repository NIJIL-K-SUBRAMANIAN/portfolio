import React, { Component } from "react";
import Searchbutton from "./Searchbutton";
import { InputGroup, Form } from "react-bootstrap";

class Userinput extends Component {
  constructor() {
    super();
    this.state = {
      searchvalue: "",
    };
  }

  render() {
    const searchValue = (e) => {
      this.setState({ searchvalue: e.target.value })
      
    }
   

    return (
      <InputGroup size="sm rounded-5" onChange={searchValue} className="mb-3 ">
        <Form.Control
          placeholder="Search for movies"
          aria-label="Search for movi es"
          aria-describedby="basic-addon2"
        />

        <Searchbutton serchvalues={this.state.searchvalue} />
      </InputGroup>
    );
  }
}

export default Userinput;
