'use strict';

import { BankComponent } from './BankComponent';
import { HomeComponent } from '../Components/HomeComponent';
import { ProfileComponent } from '../Components/ProfileComponent';
import React from 'react';
import { Route, Switch } from 'react-router';
import '../Styles/kube.css'; //This looks hacky, ask about this
import '../Styles/App.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className='header'>
          <h1 className='logo'>Codebank</h1>
          <div className='authentication'>
            <button className='authentication-button'>Login</button>
            <button className='authentication-button'>Sign Up</button>
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
