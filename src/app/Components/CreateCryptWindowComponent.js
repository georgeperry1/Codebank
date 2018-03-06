'use strict'

import React from 'react';
import '../Styles/CreateCryptWindowComponent.css';

export class CreateCryptWindowComponent extends React.Component {
  handleClick = () => {
    const newCryptInfo = {
      name: this.name.value,
      parentVault: this.props.parentVault
    };
    this.props.createNewCrypt(newCryptInfo);
    this.name.value = null;
  }

  render() {
    return (
      <div className='create-crypt-window'>
        <div className='create-crypt-window-inner'>
          <form className='form create-crypt-window-form'>
            <h3 className='bank-list-heading'>Create a New Vault</h3>
            <hr/>
            <div className='form-item'>
              <label>Crypt Name<span className='req'>*</span></label>
              <input
                className='create-crypt-input'
                type='text'
                placeholder='JSX, Props, State...'
                ref={(input) => {this.name = input}}
                required
              ></input>
              <div className='desc'>Crypts should be named after explicit topics - e.g. JSX, Props and State would be a Crypts within React.js</div>
            </div>
            <div className='form-button-container'>
              <button
                className='create-vault-form-button'
                type='button'
                onClick={this.handleClick}
              >
                Submit Crypt
              </button>
              <div className='desc'>Crypt submissions will be subject to moderation</div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
