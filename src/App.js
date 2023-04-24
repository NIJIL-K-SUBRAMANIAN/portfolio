import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movieclub from "./components/Movieclub/Movieclub";
import Searchmovie from "./components/Movieclub/Searchmovie";
import Footer from "./components/footer/Footer";
import Movie from "./components/Movieclub/Movie";
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12  ">
          <Router>
            <Header></Header>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/movieclub" element={<Movieclub />} />
              <Route path="/movieclub/searchmovie" element={<Searchmovie/>}/>
              <Route path="/movieclub/searchmovie/dummyvalue" element={<Movie/>}/>
            </Routes>
            <Footer />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
