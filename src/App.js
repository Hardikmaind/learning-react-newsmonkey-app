import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// didnt use the link above so removed it in the above
// import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

export default class App extends Component {
  c = "john";
  pageSize=15;
  render() {
    return (
      <>
        <Router>
          <Navbar />
          
          <Routes>
          {/* if we didnt write the keyword exact then only the endpoints(in the url /generl, /Business etc will appear) will change and not the components itself . it will change after we reload the browser .understand the problwm here- for example if i get into the route general , then we will get into the genral route with category general but if i then navigate to any other route for example health then the whole component will not reload, react will think that the news component is already mounted why there is need to mount the component again(re-mount). But here we have to remount the component with the updated props and i have to apply the categaory='health' wala mujhe lagana hain . TO SOLVE THIS PROBLEM I NEED TO GIVE THE  UNIQUE KEY PROP. HERE BELOW THAT UNIQUE PROP IS "key" */}
            <Route exact path="/" element={<News  key="General" pageSize={this.pageSize} country={"us"} category={"General"} /> }/>
            <Route exact path="/Business" element={<News  key="Business" pageSize={this.pageSize} country={"us"} category={"Business"} /> }/>
            <Route exact path="/Entertainment" element={<News key="Entertainment" pageSize={this.pageSize} country={"us"} category={"Entertainment"} /> }/>
            <Route exact path="/General" element={<News key="General" pageSize={this.pageSize} country={"us"} category={"General"} /> }/>
            <Route exact path="/Health" element={<News  key="Health" pageSize={this.pageSize} country={"us"} category={"Health"} /> }/>
            <Route exact path="/Science" element={<News key="Science" pageSize={this.pageSize} country={"us"} category={"Science"} /> }/>
            <Route exact path="/Sports" element={<News  key="Sports" pageSize={this.pageSize} country={"us"} category={"Sports"} /> }/>
            <Route exact path="/Technology" element={<News  key="Technology" pageSize={this.pageSize} country={"us"} category={"Technology"} /> }/>



          </Routes>
        </Router>
      </>
    );
  }
}
