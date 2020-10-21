import React, { Component } from 'react'
import './App.css'
import {BrowserRouter,Switch, Route, Link} from 'react-router-dom'

import Create from './components/Create'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Edit from './components/Edit'
import List from './components/List'
import Home from './components/Home'

export default class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to={'/'} className='nav-brand'>DISCIPLINAS</Link>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <Link to={'/'} className='nav-link'>Home</Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/signin'} className='nav-link'>Signin</Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/signup'} className='nav-link'>Singup</Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/create'} className='nav-link'>Criar</Link>
                </li>
                <li className='nav-item'>
                  <Link to={'/list'} className='nav-link'>Listar</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/signin' component={Signin}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/create' component={Create}/>
            <Route path='/edit/:id' component={Edit}/>
            <Route path='/list' component={List}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  
}

