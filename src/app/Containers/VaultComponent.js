'use strict'

import { connect } from 'react-redux';
import React from 'react';
import * as VaultActions from '../Actions/VaultActions';
import '../Styles/VaultComponent.css';

class VaultComponent extends React.Component {
  componentDidMount() {
    this.props.showVault(this.props.passedId);
  }

//Get vault from selected vault

  render() {
    return (
      <div className='vault-container'>
        <h3>{this.props.selectedVault.name}</h3>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    vaults: state.vaultReducer.vaults,
    selectedVault: state.showVaultReducer.selectedVault,
    passedId: state.showVaultReducer.passedId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showVault: (vaultId) => dispatch(VaultActions.showVaultAction(vaultId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VaultComponent);
