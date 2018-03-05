'use strict'

import React from 'react';
import '../Styles/CryptListComponent.css';


export class CryptListComponent extends React.Component {
  render() {
    return (
      <div className='crypt-list-item'>
        <h5>{this.props.crypt.name}</h5>
      </div>
    )
  }
}
