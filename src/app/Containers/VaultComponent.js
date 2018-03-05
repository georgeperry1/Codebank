'use strict'

import { connect } from 'react-redux';
import React from 'react';
import '../Styles/VaultComponent.css';

class VaultComponent extends React.Component {
  // componentDidMount() {
  //   console.log('I LOADED');
  // }

//Get vault from selected vault

  render() {
    return (
      <div className='vault-container'>
        <h3>Hello</h3>
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

})

export default connect(mapStateToProps, mapDispatchToProps)(VaultComponent);
