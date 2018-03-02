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

  handleClick = () => {
    console.log('Click handled');
  }

  render() {
    return (
      <div className='main'>
        <div className='row' id='codebank-nav'>
          <div className='col col-5'></div>
          <div className='col col-2' id='header'>
            <h1 className='logo'><a href='/#/'>Codebank</a></h1>
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
          <Route
            exact path='/'
            render={(props) => (<HomeComponent goToVaultsPage={this.handleClick}/>)}
          />
          <Route
            path='/vaults'
            render={(props) => (<BankComponent />)}
          />
          <Route path='/profile' component={ProfileComponent}/>
        </Switch>
      </div>
    )
  }
}
