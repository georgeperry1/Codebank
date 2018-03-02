'use strict';

import { BankListComponent } from '../Components/BankListComponent';
import { connect } from 'react-redux';
import React from 'react';
import * as VaultActions from '../Actions/VaultActions';
import '../Styles/BankComponent.css';

class BankComponent extends React.Component {
  componentDidMount() {
    this.fetchVaults();
  }

  fetchVaults = () => {
    fetch('http://localhost:3000/vaults', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(vaults => this.props.addVaults(vaults))
  }

  render() {
    return (
      <div className='bank-list-container'>
        <BankListComponent heading={'Most Popular'} vaults={this.props.vaults}/>
        <BankListComponent heading={'Recently Added'} vaults={this.props.vaults}/>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  vaults: state.vaults
});

const mapDispatchToProps = (dispatch) => ({
  addVaults: (vaults) => dispatch(VaultActions.addVaultsAction(vaults)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BankComponent);
