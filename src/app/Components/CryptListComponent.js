'use strict'

import { connect } from 'react-redux';
import React from 'react';
import * as CryptActions from '../Actions/CryptActions';
import '../Styles/CryptListComponent.css';

class CryptListComponent extends React.Component {
  handleClick = () => {
    const cryptId = this.props.crypt._id;
    const parentVaultId = this.props.parentVaultId;
    const cryptInfo = {
      cryptId: cryptId,
      parentVaultId: parentVaultId
    }
    this.props.showCrypt(cryptInfo);
  }

  render() {
    return (
      <div
        className='crypt-list-item'
        onClick={this.handleClick}
      >
        <h5>{this.props.crypt.name}</h5>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showCrypt: (cryptInfo) => dispatch(CryptActions.showCryptAction(cryptInfo))
  }
}

export default connect(null, mapDispatchToProps)(CryptListComponent);
