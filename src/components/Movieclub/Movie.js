import axios from "axios";
import React, { useEffect, useState } from "react";
import "./movie.css";
import {Image} from "react-bootstrap";
import { useLocation } from "react-router-dom";
export default function Movie() {
  const location = useLocation();
  const { movieDetails } = location.state;
let [movieData1,setMovieData1] = useState()
let [genre,setGenre] = useState()
  useEffect(()=>{
    axios.get("https://api.themoviedb.org/3/movie/19995?api_key=1c07122d31d8b63a51e73a55d00d7589").then((response)=>{
     setMovieData1(response.data)
     setGenre(response.data.genres)
    })
  })

 

 let backdrop ="https://image.tmdb.org/t/p/w500/"+ movieDetails.backdrop_path;
 let poster = "https://image.tmdb.org/t/p/w500/"+movieDetails.poster_path

  return <div className="container">
    <div className="row">
      <div className="col-md-12 col-12 col-lg-12 col-sm-12 d-flex mt-4 content flex-sm-column flex-column flex-md-row flex-lg-row align-items-center  "  style={{ height:"86vh",}} >
      
     <div className="col-md-4  " >
       
         <Image src={poster} className="rounded-4 img-properties "  >

       
      </Image>

     </div>

     <div className="col-md-8  ">
       <h3 className="">{movieDetails.original_title}</h3>
         <h6>{movieDetails.release_date}</h6>
       
      <p className="">{movieDetails.overview}</p>
     </div>
       
      
    
   
      </div>
    </div>
   
    </div>;
}

//>>ini first pagil trending koodathe oru 2 monnenam koode vennm popular and anything and size korakkanam treandingnte
//>>ee pagail baki kittunna content set akkanam 
//>> gener sett akkan engnayenu nokannam pinee budget revenu trailer kannikanoru window vennam 