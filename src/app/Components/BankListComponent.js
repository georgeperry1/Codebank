'use strict';

import { BankListItemComponent } from './BankListItemComponent';
import React from 'react';
import '../Styles/BankListComponent.css';

const renderVaults = (props) => props.vaults.map(vault => {
  return (
    <BankListItemComponent
      key={vault.name}
      vault={vault}
    />
  )
})

export const BankListComponent = (props) => (
  <div className='bank-list-component'>
    <h3 className='bank-list-heading'>{props.heading}</h3>
    <hr className='bank-list-hr'/>
    <div className='bank-list-item-container'>
      {renderVaults(props)}
    </div>
  </div>
)
