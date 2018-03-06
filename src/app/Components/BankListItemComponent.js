'use strict'

import { Link } from 'react-router-dom';
import React from 'react';
import { VaultLogo } from '../Images/VaultLogo';
import '../Styles/BankListItemComponent.css';

export class BankListItemComponent extends React.Component {
  render() {
    return (
      <div
        key={this.props.vault.name}
        className='col col-2 bank-list-item'
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
