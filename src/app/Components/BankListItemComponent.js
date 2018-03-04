'use strict'

import { connect } from 'react-redux';
import React from 'react';
import * as VaultActions from '../Actions/VaultActions';
import { VaultLogo } from '../Images/VaultLogo';
import '../Styles/BankListItemComponent.css';

class BankListItemComponent extends React.Component {

  handleClick = () => {
    const vaultId = this.props.vault._id;
    this.props.showVault(vaultId);
  }

  render() {
    return (
      <div
        key={this.props.vault.name}
        className='col col-2 bank-list-item'
        onClick={this.handleClick}
      >
        <h4 className='vault-name'>{this.props.vault.name}</h4>
        <VaultLogo />
        <p className='vault-description'>{this.props.vault.description}</p>
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
const mapDispatchToProps = (dispatch) => {
  return {
    showVault: (vault) => dispatch(VaultActions.showVaultAction(vault))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BankListItemComponent);
