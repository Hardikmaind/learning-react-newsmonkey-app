
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c='john'
  render() {
    return (
      <>                        
                                              {/* here this.c menas iss class ka c variable */}
        hello my first class based component {this.c}
      </>
    )
  }
}

