import React, { Component } from 'react'
import './App.css'

import Navigate from './components/Navigate'
import Sum from './components/Sum'
import Mult from './components/Mult'
import Bigger from './components/Bigger'

export default class App extends Component {

  render() {
    return (
      <div className='container'>
        <h1> REDUX CALC</h1>
        <div className='line'>
          <Navigate/>
        </div>
        <div className='line'>
          <Sum/>
          <Mult/>
          <Bigger/>
        </div>
      </div>
    )
  }
}
