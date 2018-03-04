import React from 'react';
import '../Styles/CreateVaultWindowComponent.css';


export class CreateVaultWindowComponent extends React.Component {

handleClick = () => {
  const cryptsArray = this.crypts.value.replace(/\s/g, '').split(',');
  const newVaultInfo = {
    name: this.name.value,
    url: this.url.value,
    description: this.description.value,
    crypts: cryptsArray
  };
  this.props.createNewVault(newVaultInfo);
  this.name.value = null;
  this.url.value = null;
  this.description.value = null;
  this.crypts.value = null;
}

render() {
  return (
    <div className='create-vault-window'>
      <div className='create-vault-window-inner'>
        <form className='form create-vault-window-form'>
          <h3 className='bank-list-heading'>Create a New Vault</h3>
          <hr/>
          <div className='form-item'>
            <label>Vault Name <span className='req'>*</span></label>
            <input
              type='text'
              placeholder='Example.js'
              ref={(input) => {this.name = input}}
              required
            ></input>
          </div>
          <div className='form-item'>
            <label>Vault URL <span className='req'>*</span></label>
            <input
              type='text'
              placeholder='https://github.com/examplejs/'
              ref={(input) => {this.url = input}}
              required
            ></input>
            <div className='desc'>Enter a homepage or GitHub Repo</div>
          </div>
          <div className='form-item'>
            <label>Vault Description <span className='req'>*</span></label>
            <textarea
              rows='4'
              placeholder='Example.js is an example library...'
              ref={(input) => {this.description = input}}
              required
            ></textarea>
          </div>
          <div className='form-item'>
            <label>Vault Crypts</label>
            <div className='desc'>Crypts are topics within each Vault - e.g. JSX would be a Crypt within React.js. Separate with a comma</div>
            <textarea
              className='create-vault-forms-crypts'
              placeholder='JSX, Components, etc...'
              rows='2'
              ref={(input) => {this.crypts = input}}
            ></textarea>
          </div>
          <div className='form-button-container'>
            <button
              className='create-vault-form-button'
              type='button'
              onClick={this.handleClick}
            >
              Submit Vault
            </button>
            <div className='desc'>Vault submissions will be subject to moderation</div>
          </div>
        </form>
      </div>
    </div>
    )
  }
}
