'use strict';

import { connect } from 'react-redux';
import React from 'react';
import * as VaultActions from '../Actions/VaultActions';

class BankComponent extends React.Component {
  componentDidMount() {
    this.fetchVaults();
  }

  fetchVaults = () => {
    fetch('http://localhost:3000/vaults', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(vaults => console.log(vaults))
  }

  render() {
    return (
      <div>
        <h1>Bank Vaults</h1>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  // vaults: state.vaults
});

const mapDispatchToProps = (dispatch) => ({
  addVaults: (vaults) => dispatch(VaultActions.addVaultsAction(vaults)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BankComponent);
