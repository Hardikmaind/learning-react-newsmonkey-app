import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// didnt use the link above so removed it in the above
// import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

export default class App extends Component {
  c = "john";
  pageSize = 5;

  // state is an object
  state={
    progress:0
  }

  // we have to make the setProgress an arrow funtion
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
          // i can set the properties of the loading bbar in it. see below i have set the height and the color of the loading bar. all the different properties u can see the the git page of the loading bar 
          height={3}
            color="red"
            // progress={progress}  here progree means what will be the initial progress of the loading bar
            progress={this.state.progress}
            // onLoaderFinished={() => }
          />

          <Routes>
            {/* if we didnt write the keyword exact then only the endpoints(in the url /generl, /Business etc will appear) will change and not the components itself . it will change after we reload the browser .understand the problwm here- for example if i get into the route general , then we will get into the genral route with category general but if i then navigate to any other route for example health then the whole component will not reload, react will think that the news component is already mounted why there is need to mount the component again(re-mount). But here we have to remount the component with the updated props and i have to apply the categaory='health' wala mujhe lagana hain . TO SOLVE THIS PROBLEM I NEED TO GIVE THE  UNIQUE KEY PROP. HERE BELOW THAT UNIQUE PROP IS "key" */}
            <Route
              exact
              path="/"
              element={
                // passed the progress to News component because i have to relate the news component to setprogress
                <News setProgress={this.setProgress}
                  key="General"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"General"}
                />
              }
            />
            <Route
              exact
              path="/Business"
              element={
                <News setProgress={this.setProgress}
                  key="Business"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"Business"}
                />
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <News setProgress={this.setProgress}
                  key="Entertainment"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"Entertainment"}
                />
              }
            />
            <Route
              exact
              path="/General"
              element={
                <News setProgress={this.setProgress}
                  key="General"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"General"}
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <News setProgress={this.setProgress}
                  key="Health"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"Health"}
                />
              }
            />
            <Route
              exact
              path="/Science"
              element={
                <News setProgress={this.setProgress}
                  key="Science"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"Science"}
                />
              }
            />
            <Route
              exact
              path="/Sports"
              element={
                <News setProgress={this.setProgress}
                  key="Sports"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"Sports"}
                />
              }
            />
            <Route
              exact
              path="/Technology"
              element={
                <News setProgress={this.setProgress}
                  key="Technology"
                  pageSize={this.pageSize}
                  country={"us"}
                  category={"Technology"}
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
