'use strict'

import { connect } from 'react-redux';
import { CreateGemWindowComponent } from  '../Components/CreateGemWindowComponent';
import React from 'react';
import * as GemActions from '../Actions/GemActions';
import '../Styles/CreateGemComponent.css';

class CreateGemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWindow: false
    };
  }

  showCreateNewGemWindow() {
    this.setState({
      showWindow:!this.state.showWindow
    });
  }

  createNewGem = (newGemInfo) => {
    this.setState({
      showWindow:!this.state.showWindow
    });
    this.props.createGem(newGemInfo);
  }

  render() {
    return (
      <div className='create-crypt-button-container'>
        <div className='col col-2'>
          <button
            className='create-crypt-button'
            onClick={() => this.showCreateNewGemWindow()}
          >
            Create Gem
          </button>
          {this.state.showWindow ? <CreateGemWindowComponent createNewGem={(newGemInfo) => {this.createNewGem(newGemInfo)}}/> : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    vaults: state.vaultReducer.vaults,
    selectedVault: state.showVaultReducer.selectedVault
  }
}

const mapDispatchToProps = (dispatch) => ({
  createGem: (gem) => dispatch(GemActions.createGemAction(gem)),
  createVaultFail: (gem) => dispatch(GemActions.createGemFailAction(gem))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateGemComponent);
