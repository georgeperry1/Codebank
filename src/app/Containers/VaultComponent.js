'use strict'

import { connect } from 'react-redux';
import CreateCryptComponent from '../Components/CreateCryptComponent';
import { CryptListComponent } from '../Components/CryptListComponent';
import React from 'react';
import * as VaultActions from '../Actions/VaultActions';
import '../Styles/VaultComponent.css';

class VaultComponent extends React.Component {
  componentDidMount = () => {
    //Collect data on the selected vault
    if(!this.props.passedId) return null;
    this.props.showVault(this.props.passedId);
    //Render the list of crypts
    this.renderCryptList();
  }


  renderCryptList() {
    const crypts = this.props.selectedVault.crypts;
    if (!crypts) {
      return (
        <div className='no-crypts-message'>
          No Crypts in Vault
        </div>
      )
    } else {
      return crypts.map(crypt => {
        return (
          <CryptListComponent
            key={crypt.name}
            crypt={crypt}
          />
        )
      })
    }
  }

  render() {
    const vault = this.props.selectedVault;
    return (
      <div className='vault-body'>
        <div className='vault-container'>
          <div className='vault-navigation-container'>
            <div className='col col-12'>
              <h4 className='vault-header'>{vault.name}</h4>
            </div>
          </div>
          <hr className='vault-hr'/>
          <div className='vault-content'>
            <div className='col col-3 crypt-list'>
              <div className='crypt-list-header-container'>
                <h4 className='crypt-list-header'>Crypts</h4>
                <CreateCryptComponent />
              </div>
              <hr className='vault-hr'/>
              {this.renderCryptList()}
            </div>
            <div className='col col-8 crypt-content'>
              <div className='crypt-content-navigation'>
                <div className='col col-10'>
                  <h4 className='crypt-content-header'>Gems</h4>
                </div>
                <div className='col col-2'>
                  <h5 className='create-gem-button'>CREATE GEM</h5>
                </div>
              </div>
              <hr className='vault-hr'/>
            </div>
          </div>
        </div>
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
