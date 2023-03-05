/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    // this i how we use the props in the class bases components in the react
    // used the concept of destructuring the array here...in which this.props is an object and in that object title and discriminator is getting pulled away
    let { title, discription, imageUrl, newsUrl } = this.props;

    return (
      // i made this style as a js object then i write the object in it directly so inserted {} once again. wrote key directly and value in a double inverted comma
      <div className="my-3">
        <div className="card "
         style={{ width: "18rem" }} //here i have commented the width so that the card occupis the whole space in the mobile(responsive) view
         >
          {/* this says that, if image is not found then say, image not found ,or else show the imgUrl */}
          <img
            src={!imageUrl ? "image not found" : imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            {/* here title and discription is getting pulled from the above this .prop and wrote in this way in a curly bracke */}
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{discription}...</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
