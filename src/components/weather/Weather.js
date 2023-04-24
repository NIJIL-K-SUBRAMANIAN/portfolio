import React, { Component } from "react";
import "./weather.css";
import axios from "axios";

import { Card } from "react-bootstrap";

class Weather extends Component {
  constructor(props) {
    super();
    this.state = {
      serchValue: "",
      weatherData: {},
      tempData: {},
      deg: "",
    };
  }

  submitData = (e) => {
    e.preventDefault();

    const options = {
      headers: {
        "X-RapidAPI-Key": "f6eb71288dmshd52752245e2adddp119be9jsn6fc73ce2bed4",
        "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
      },
    };

    let apiUrl =
      "https://open-weather13.p.rapidapi.com/city/" + this.state.serchValue;
    toString(apiUrl);

    axios.get(apiUrl, options).then((response) => {
      this.setState({ weatherData: response });
      this.setState({ tempData: response.data.main });
      console.log(this.state.weatherData);
    });

   
  };

  searchvalue = (e) => {
    this.setState({ serchValue: e.target.value });
  };

  render() {



 

    return (
      <div className="container">
        <div className=" row ">
          <div className="bg col-md-6 pt-2">
            <form action="">
              <input name="serch" onChange={this.searchvalue} />
              <button onClick={this.submitData}>Submit</button>
            </form> 
          </div>
          <div className="bg col-md-6 d-flex justify-content-end pt-3">
            <Card className=" " style={{ width: "18rem", height: "18rem" }}>
              <h1 className="display-1 text-center">
                {this.state.tempData.temp}
              </h1>
              <Card.Body>
                <Card.Title className="text-center">{this.state.weatherData.name}</Card.Title>
               
              </Card.Body>
              <div>
                <h4>lat</h4>
                <h4>lat</h4>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default Weather;
