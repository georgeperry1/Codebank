'use strict'

import { connect } from 'react-redux';
import { CreateCryptWindowComponent } from  '../Components/CreateCryptWindowComponent';
import React from 'react';
import * as CryptActions from '../Actions/CryptActions';
import '../Styles/CreateCryptComponent.css';

class CreateCryptComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWindow: false
    };
  }

  showCreateNewCryptWindow() {
    this.setState({
      showWindow:!this.state.showWindow
    });
  }

  createNewCrypt = (newCryptInfo) => {
    console.log('STAGE 1:', newCryptInfo);
    this.setState({
      showWindow:!this.state.showWindow
    });
    this.props.createCrypt(newCryptInfo);
  }

  render() {
    return (
      <div className='create-crypt-button-container'>
        <div className='col col-2'>
          <button
            className='create-crypt-button'
            onClick={() => this.showCreateNewCryptWindow()}
          >
            Create Crypt
          </button>
          {this.state.showWindow ? <CreateCryptWindowComponent parentVault={this.props.selectedVault._id} createNewCrypt={(newCryptInfo) => {this.createNewCrypt(newCryptInfo)}}/> : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    vaults: state.vaultReducer.vaults,
    selectedVault: state.showVaultReducer.selectedVault
  }
}

const mapDispatchToProps = (dispatch) => ({
  createCrypt: (crypt) => dispatch(CryptActions.createCryptAction(crypt)),
  createCryptFail: (crypt) => dispatch(CryptActions.createCryptFailAction(crypt))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateCryptComponent);
