import React, { Component } from 'react'
// we can import anything as any name. like see below we have imported the loading1 from loading.gif
import loading1 from './Loading.gif'

export class Spinner extends Component {

  render() {

    return (

      <div className='text-center'>
    <img className='my-3' src={loading1} alt="" />
      </div>
      
    )
  }
}

export default Spinner