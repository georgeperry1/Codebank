'use strict';

import { connect } from 'react-redux';
import BankComponent from './BankComponent';
import VaultComponent from './VaultComponent';
import { HomeComponent } from '../Components/HomeComponent';
import { ProfileComponent } from '../Components/ProfileComponent';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import '../Styles/kube.css';
import '../Styles/normalize.css';
import '../Styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className='main'>
        <div className='row' id='codebank-nav'>
          <div className='col col-5'>
            <p className='home-button'><a href='/'>Home</a></p>
          </div>
          <div className='col col-2' id='header'>
            <h1 className='logo'><a href='/'>Codebank</a></h1>
          </div>
          <div className='col col-3'></div>
          <div className='col col-2'>
            <div className='auth-button-container'>
              <p className='auth-button'><a href='/login'>Login</a></p>
              <p className='auth-button'><a href='/sign-up'>Sign Up</a></p>
            </div>
          </div>
        </div>
        <HashRouter>
          <Switch >
            <Route
              exact={true} path='/'
              render={(props) => (
                <HomeComponent/>
              )}
            />
            <Route
              exact={true} path='/vaults'
              render={(props) => (
                <BankComponent/>
              )}
            />
            <Route
              exact={true} path='/vault/:vaultId'
              render={(props) => (
                <VaultComponent/>
              )}
            />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  vaults: state.vaults
});

export default connect(mapStateToProps, null)(App);
