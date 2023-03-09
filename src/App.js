import "./App.css";

import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// didnt use the link above so removed it in the above
// import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const App=()=>{
  // eslint-disable-next-line no-unused-vars
  const c = "john";
  const pageSize = 5;
  // here with the help of .env.local , i have hide the api key of my app. using the keywords "process.env."
  const api_key = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            // i can set the properties of the loading bbar in it. see below i have set the height and the color of the loading bar. all the different properties u can see the the git page of the loading bar
            height={3}
            color="red"
            // progress={progress}  here progree means what will be the initial progress of the loading bar
            progress={progress}
            // onLoaderFinished={() => }
          />

          <Routes>
            {/* if we didnt write the keyword exact then only the endpoints(in the url /generl, /Business etc will appear) will change and not the components itself . it will change after we reload the browser .understand the problwm here- for example if i get into the route general , then we will get into the genral route with category general but if i then navigate to any other route for example health then the whole component will not reload, react will think that the news component is already mounted why there is need to mount the component again(re-mount). But here we have to remount the component with the updated props and i have to apply the categaory='health' wala mujhe lagana hain . TO SOLVE THIS PROBLEM I NEED TO GIVE THE  UNIQUE KEY PROP. HERE BELOW THAT UNIQUE PROP IS "key" */}
            <Route
              exact
              path="/"
              element={
                // passed the progress to News component because i have to relate the news component to setprogress
                <News
                  setProgress={setProgress}
                  APIKEY={api_key}
                  key="General"
                  pageSize={pageSize}
                  country={"us"}
                  category={"General"}
                />
              }
            />
            <Route
              exact
              path="/Business"
              element={
                <News
                  setProgress={setProgress}
                  APIKEY={api_key}
                  key="Business"
                  pageSize={pageSize}
                  country={"us"}
                  category={"Business"}
                />
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  setProgress={setProgress}
                  APIKEY={api_key}
                  key="Entertainment"
                  pageSize={pageSize}
                  country={"us"}
                  category={"Entertainment"}
                />
              }
            />
            <Route
              exact
              path="/General"
              element={
                <News
                  setProgress={setProgress}
                  APIKEY={api_key}
                  key="General"
                  pageSize={pageSize}
                  country={"us"}
                  category={"General"}
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <News
                  setProgress={setProgress}
                  APIKEY={api_key}
                  key="Health"
                  pageSize={pageSize}
                  country={"us"}
                  category={"Health"}
                />
              }
            />
            <Route
              exact
              path="/Science"
              element={
                <News
                  setProgress={setProgress}
                  APIKEY={api_key}
                  key="Science"
                  pageSize={pageSize}
                  country={"us"}
                  category={"Science"}
                />
              }
            />
            <Route
              exact
              path="/Sports"
              element={
                <News
                  setProgress={setProgress}
                  APIKEY={api_key}
                  key="Sports"
                  pageSize={pageSize}
                  country={"us"}
                  category={"Sports"}
                />
              }
            />
            <Route
              exact
              path="/Technology"
              element={
                <News
                  setProgress={setProgress}
                  APIKEY={api_key}
                  key="Technology"
                  pageSize={pageSize}
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
export default App