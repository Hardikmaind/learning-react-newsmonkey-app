import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {

    // used the concept of destructuring the array here...in which this.props is an object and in that object title and discriminator is getting pulled away
    let {title,discription} = this.props

    return (

                                    // i made this style as a js object then i write the object in it directly so inserted {} once again. wrote key directly and value in a double inverted comma
      <div><div className="card" style={{width: "18rem"}}>
      <img src="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/E3CC/production/_128761385_brook.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
      {/* here title and discription is getting pulled from the above this .prop and wrote in this way in a curly bracke */}
        <h5 className="card-title">{title} </h5>
        <p className="card-text">{discription}</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
      </div>
    </div></div>
    )
  }
}
