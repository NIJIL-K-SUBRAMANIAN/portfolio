import React, { Component } from "react";
import { Modal, Image } from "react-bootstrap";
import {Link} from 'react-router-dom'
import axios from "axios";
import "./movieclub.css";
import Userinput from "./Userinput";

class Movieclub extends Component {
  constructor() {
    super();
    this.state = {
      trending: [],
      popular:[],
      upcoming:[],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=1c07122d31d8b63a51e73a55d00d7589"
      )
      .then((response) => {
       
        this.setState({ trending: response.data.results });
      });

      axios.get("https://api.themoviedb.org/3/movie/popular?api_key=1c07122d31d8b63a51e73a55d00d7589&page=2").then((response)=>{
       
        this.setState({popular:response.data.results})
      })

      axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=1c07122d31d8b63a51e73a55d00d7589&page=1").then((response)=>{
        console.log(response.data)
        this.setState({upcoming:response.data.results})
      })
  }
  render() {
    return (
     <div>
        <div className="">
          <div className="col-md-12  bg  d-flex flex-column align-items-center justify-content-end ">
            <h1 className="text-white">Welcome ,its movie time</h1>
            <div className="input ">
              
              <Userinput />
            </div>
          </div>
        </div>
        <div className=" mt-2 ">
          <h5>Trending Now</h5>
          
          <Modal.Body className="d-flex scroll" id="cards-container">
            {this.state.trending.map((item, key) => {
              let posterImage =
                "https://image.tmdb.org/t/p/w200/" + item.poster_path;
              return (
                <div >
                  <Link className="text-decoration-none "  to="/movieclub/searchmovie/dummyvalue" state ={{movieDetails:item}}  >
                  <Image src={posterImage} className="p-2 rounded-5" style={{width:"11rem"}} />

                  <h5 className="p-2 text-center fs-6 text-dark" style={{fontSize:"7px"}}>{item.title}</h5>
                  </Link>
                </div>
                
              );
            })}
          </Modal.Body>
          <h5>Popular Movies</h5>
          <Modal.Body className="d-flex scroll" id="cards-container">
            {this.state.popular.map((item, key) => {
              let posterImage =
                "https://image.tmdb.org/t/p/w200/" + item.poster_path;
              return (
                <div >
                  <Link className="text-decoration-none "  to="/movieclub/searchmovie/dummyvalue" state ={{movieDetails:item}}  >
                  <Image src={posterImage} className="p-2 rounded-5" style={{width:"11rem"}} />

                  <h5 className="p-2 text-center fs-6 text-dark" style={{fontSize:"7px"}}>{item.title}</h5>
                  </Link>
                </div>
                
              );
            })}
          </Modal.Body>

          <h5>Upcoming</h5>
          <Modal.Body className="d-flex scroll" id="cards-container">
            {this.state.upcoming.map((item, key) => {
              let posterImage =
                "https://image.tmdb.org/t/p/w200/" + item.poster_path;
              return (
                <div >
                  <Link className="text-decoration-none "  to="/movieclub/searchmovie/dummyvalue" state ={{movieDetails:item}}  >
                  <Image src={posterImage} className="p-2 rounded-5" style={{width:"11rem"}} />

                  <h5 className="p-2 text-center fs-6 text-dark" style={{fontSize:"7px"}}>{item.title}</h5>
                  </Link>
                </div>
                
              );
            })}
          </Modal.Body>
        </div>
      </div>
    );
  }
}

export default Movieclub;
