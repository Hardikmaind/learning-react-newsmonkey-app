// remove the component since i have converted the class based component  to funtion based component . so there is no need of it
// import React, { Component } from "react";
import React from "react";
// we can import anything as any name. like see below we have imported the loading1 from loading.gif
import loading1 from "./Loading.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={loading1} alt="" />
    </div>
  );
};

export default Spinner;
