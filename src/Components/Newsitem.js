/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React  from "react";

const Newsitem = (props) => {
  // this i how we use the props in the class bases components in the react
  // used the concept of destructuring the array here...in which this.props is an object and in that object title and discriminator is getting pulled away

  // after converting the component to funtion based component from the class based component. i removed the this keyword and pass the props as a parameter in the Newsitem function. to convert we have to carefully change or remove this keyword componentdidmount comppnentdidupdate componentwillunmount and constructor etc
  let { title, discription, imageUrl, newsUrl, author, date, source } = props;

  return (
    // i made this style as a js object then i write the object in it directly so inserted {} once again. wrote key directly and value in a double inverted comma
    <div className="my-3">
      <div
        className="card "
        // style={{ width: "18rem" }} //here i have commented the width so that the card occupis the whole space in the mobile(responsive) view
      >
        <div
          // added css here so that the badges on the card appear good on the mobile
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        {/* this says that, if image is not found then say, image not found ,or else show the imgUrl */}
        <img
          src={!imageUrl ? "image not found" : imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          {/* here title and discription is getting pulled from the above this .prop and wrote in this way in a curly bracke */}
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}...</p>
          {/* this condn on author states that if author is not presnt then write the name of the author as anonymous */}
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : " anonymous"} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
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
};

export default Newsitem