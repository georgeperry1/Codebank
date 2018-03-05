'use strict'

import React from 'react';

export class CryptListComponent extends React.Component {
  render() {
    return (
      <div>
        <h5>{this.props.crypt.name}</h5>
      </div>
    )
  }
}
