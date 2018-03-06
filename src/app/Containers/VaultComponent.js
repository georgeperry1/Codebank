'use strict'

import { connect } from 'react-redux';
import CreateCryptComponent from '../Components/CreateCryptComponent';
import CreateGemComponent from  '../Components/CreateGemComponent';
import CryptListComponent from '../Components/CryptListComponent';
import { GemListComponent } from '../Components/GemListComponent';
import React from 'react';
import * as VaultActions from '../Actions/VaultActions';
import '../Styles/VaultComponent.css';

class VaultComponent extends React.Component {
  componentDidMount = () => {
    //Collect data on the selected vault
    const vaultId = this.props.match.params.vaultId;
    this.props.showVault(vaultId);
  }

  componentWillReceiveProps(nextProps) {
    //Render list once new one is added
    const vaultId = this.props.match.params.vaultId;
    if (nextProps.vaults !== this.props.vaults) {
      this.props.showVault(vaultId);
      this.renderCryptList();
      this.renderGemList();
    }
  }

  renderCryptList = () => {
    const crypts = this.props.selectedVault.crypts;
    const parentVaultId = this.props.match.params.vaultId;
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
            parentVaultId={parentVaultId}
          />
        )
      })
    }
  }

  renderGemList = () => {
    const gems = this.props.selectedCrypt.gems;
    if (!gems) {
      return (
        <div className='no-crypts-message'>
          Select a Crypt
        </div>
      )
    } else {
      if (gems.length === 0) {
        return (
          <div className='no-crypts-message'>
            No Gems in Crypt
          </div>
        )
      }
      return gems.map(gem => {
        return (
          <GemListComponent
            key={gem.title}
            gem={gem}
          />
        )
      })
    }
  }

  render() {
    const vault = this.props.selectedVault;
    const crypt = this.props.selectedCrypt;
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
                <h4 className='crypt-content-header'>{crypt.name} Gems</h4>
                <CreateGemComponent />
              </div>
              <hr className='vault-hr'/>
              {this.renderGemList()}
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
    selectedCrypt: state.showCryptReducer.selectedCrypt
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showVault: (vaultId) => dispatch(VaultActions.showVaultAction(vaultId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VaultComponent);
