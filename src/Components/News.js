import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>newsmonkey top headlines</h2>
        <div className="row">
          {/* here col md is a class in bootsrap which says  in medium devices, 4 columns le lgi. bootstrap has 12 column grib in it. so in this way we get 4*3=12. so the each card will take place of 4 column. and in this way they will be centered */}
          <div className="col-md-4">
            <Newsitem title="my title" discription="my discription" />
          </div>
          <div className="col-md-4">
            <Newsitem title="my title" discription="my discription" />
          </div>
          <div className="col-md-4">
            <Newsitem title="my title" discription="my discription" />
          </div>
        </div>
      </div>
    );
  }
}
