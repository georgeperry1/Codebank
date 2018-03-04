'use strict';

import BankListItemComponent from './BankListItemComponent';
import React from 'react';
import '../Styles/BankListComponent.css';

export class BankListComponent extends React.Component {
  componentDidMount() {
    if(!this.props.vaults) return null;
    this.renderVaults();
  }
  renderVaults() {
    return this.props.vaults.map(vault => {
      return (
        <BankListItemComponent
          key={vault.name}
          vault={vault}
        />
      )
    })
  }
render() {
  return (
    <div className='bank-list-component'>
      <h3 className='bank-list-heading'>{this.props.heading}</h3>
      <hr className='bank-list-hr'/>
      <div className='bank-list-item-container'>
        {this.renderVaults()}
      </div>
    </div>
    )
  }
}
