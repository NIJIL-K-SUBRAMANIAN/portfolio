import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Userinput from "./Userinput";
import { Link } from "react-router-dom";
import "./searchmovies.css";

export default function Searchmovie() {
  const location = useLocation();
  const { text } = location.state;
  const [dat, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=1c07122d31d8b63a51e73a55d00d7589&query=${text}`
      )
      .then((response) => {
        setData(response.data.results);
      });
  });

  return (
    <div className=" col-md-12 mt-2 p-4">
      <Userinput/>

      {dat.map((item, key) => {
        let image = "https://image.tmdb.org/t/p/w200/" + item.poster_path;

        return (
          <Link className="text-decoration-none" to="/movieclub/searchmovie/dummyvalue" state ={{movieDetails:item}}>
          <Card className="d-flex  align-items-center flex-column flex-md-row shadow p-1 mb-3  bg-white rounded  ">
            <Card.Img
              className="img-w"
              variant="top"
              src={image}
            
            />
            <Card.Body>
              <Card.Title className="text-dark  ">{item.title}</Card.Title>
              <h6 className="fs-6 fw-bold text-secondary ">{item.release_date}</h6>
              <Card.Text className="text-dark">{item.overview}</Card.Text>
            </Card.Body>
          </Card>
          </Link>
        );
      })}
    </div>
  );
}
