'use strict';

import { BankListComponent } from '../Components/BankListComponent';
import { connect } from 'react-redux';
import CreateVaultComponent from '../Components/CreateVaultComponent';
import React from 'react';
import * as VaultActions from '../Actions/VaultActions';
import '../Styles/BankComponent.css';

class BankComponent extends React.Component {
  componentDidMount = () => {
    this.props.requestVaults(this.props.vaults);
  }

  render() {
    return (
      <div className='bank-list-container'>
        <div className='vault-navigation-container'>
          <CreateVaultComponent />
        </div>
        <BankListComponent heading={'Most Popular'} vaults={this.props.vaults}/>
        <BankListComponent heading={'Recently Added'} vaults={this.props.vaults}/>
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
    requestVaults: (vaults) => dispatch(VaultActions.requestVaults(vaults)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BankComponent);
