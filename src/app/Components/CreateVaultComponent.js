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
  }

  createNewVault = (newVaultInfo) => {
    this.setState({
      showWindow:!this.state.showWindow
    })
    console.log('INFO:', newVaultInfo);
    fetch('http://localhost:3000/vaults/create', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newVaultInfo)
    })
    .then(response => {
      if (response.status === 404) this.props.createVaultFail(newVaultInfo);
    })
    .catch(error => {
      console.log('Error with POST request:', error);
    })
    this.props.createVault(newVaultInfo);
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
          {this.state.showWindow ? <CreateVaultWindowComponent createNewVault={(newVaultInfo) => {this.createNewVault(newVaultInfo)}}/> : null}
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
