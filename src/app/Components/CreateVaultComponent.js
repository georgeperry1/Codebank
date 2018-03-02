'use strict';

import { connect } from 'react-redux';
import { CreateVaultWindowComponent } from  '../Components/CreateVaultWindowComponent';
import React from 'react';
import * as VaultActions from '../Actions/VaultActions';
import '../Styles/CreateVaultComponent.css';

class CreateVaultComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWindow: false
    };
  }

  showCreateNewVaultWindow() {
    this.setState({
      showWindow:!this.state.showWindow
    });
    //Send signal to main component
  }

  render() {
    return (
      <div className='create-vault-button-container'>
        <div className='col col-2 cv'>
          <button
            className='create-vault-button'
            onClick={() => this.showCreateNewVaultWindow()}
          >
            Create Vault
          </button>
          {this.state.showWindow ? <CreateVaultWindowComponent /> : null}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  createVault: (vault) => dispatch(VaultActions.createVaultAction(vault)),
  createVaultFail: (vault) => dispatch(VaultActions.createVaultFailAction(vault))
})

export default connect(null, mapDispatchToProps)(CreateVaultComponent);
