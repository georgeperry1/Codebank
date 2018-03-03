'use strict';

import { connect } from 'react-redux';
import React from 'react';
import '../Styles/VaultComponent.css';

class VaultComponent extends React.Component {
  // componentDidMount() {
  //   this.fetchVault();
  // }
  //
  // fetchVault = () => {
  //   fetch(`http://localhost:3000/vault/${vaultId}`, {
  //     method: 'GET'
  //   })
  //   .then(response => response.json())
  //   .then(vault => {console.log('VAULT:', vault)}
  // }

  render() {
    return (
      <div className='vault-container'>
        <h3>Hello</h3>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  vaults: state.vaults
});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(VaultComponent);
