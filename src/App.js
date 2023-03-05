
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';


export default class App extends Component {
  c='john'
  render() {
    return (
      <>      
        <Navbar/>
        <News pageSize={8} country={"us"} category={"sports"}/>
        
      </>
    ) 
  }
}

