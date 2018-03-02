'use strict';

import { connect } from 'react-redux';
import React from 'react';
import * as VaultActions from '../Actions/VaultActions';
import '../Styles/CreateVaultComponent.css';

class CreateVaultComponent extends React.Component {

  createNewVault() {

  }

  render() {
    return (
      <div className='create-vault-button-container'>
        <div className='col col-2 cv'>
          <button className='create-vault-button'>Create Vault</button>
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
