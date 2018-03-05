'use strict'

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import * as VaultActions from '../Actions/VaultActions';
import { VaultLogo } from '../Images/VaultLogo';
import '../Styles/BankListItemComponent.css';

class BankListItemComponent extends React.Component {

  handleClick = () => {
    console.log('Click handled');
    const vaultId = this.props.vault._id;
    this.props.passId(vaultId);
  }

  render() {
    return (
      <div
        key={this.props.vault.name}
        className='col col-2 bank-list-item'
        onClick={this.handleClick}
      >
        <Link
          to={`/vault/${this.props.vault._id}`}
          className='bank-list-item-link'
        >
          <h4 className='vault-name'>{this.props.vault.name}</h4>
          <VaultLogo />
          <p className='vault-description'>{this.props.vault.description}</p>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    vaults: state.vaultReducer.vaults,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    passId: (passedId) => dispatch(VaultActions.passVaultIdAction(passedId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BankListItemComponent);
