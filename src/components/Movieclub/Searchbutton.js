import React, { Component } from "react";

import { Link } from "react-router-dom";

class Searchbutton extends Component {
  constructor(props) {
    super();
    this.state = {
      values: "",
      searchMovieData: [],
      d: "",
    };
  }

  render() {
   

    const demo = () => {
      if (this.props.serchvalues) {
        this.setState({ d: "/movieclub/searchmovie" });
      } else {
        this.setState({ d: "" });
      }

      return;
    };

    return (
      <div>
        <Link
          onFocus={demo}
          state={{ text: this.props.serchvalues }}
          className="btn btn-primary"
          to={this.state.d}
        >
          Search
        </Link>
      </div>
    );
  }
}

export default Searchbutton;

