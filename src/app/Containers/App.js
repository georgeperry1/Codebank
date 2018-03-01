'use strict';

import { BankComponent } from './BankComponent';
import { HomeComponent } from '../Components/HomeComponent';
import { ProfileComponent } from '../Components/ProfileComponent';
import React from 'react';
import { Route, Switch } from 'react-router';
import '../Styles/kube.css';
import '../Styles/normalize.css';
import '../Styles/App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className='main'>
        <div className='row'>
          <div className='col col-5'></div>
          <div className='col col-2' id='header'>
            <h1 className='logo'><a>Codebank</a></h1>
          </div>
          <div className='col col-3'></div>
          <div className='col col-2'>
            <div className='auth-button-container'>
              <button className='auth-button'>Login</button>
              <button className='auth-button'>Sign Up</button>
            </div>
          </div>
        </div>
        <Switch >
          <Route exact path='/' component={HomeComponent}/>
          <Route path='/vaults' component={BankComponent}/>
          <Route path='/profile' component={ProfileComponent}/>
        </Switch>
      </div>
    )
  }
}
