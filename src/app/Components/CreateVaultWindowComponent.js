import React from 'react';
import '../Styles/CreateVaultWindowComponent.css';


export class CreateVaultWindowComponent extends React.Component {

createNewVault = () => {

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
            ></input>
          </div>
          <div className='form-item'>
            <label>Vault URL <span className='req'>*</span></label>
            <input
              type='text'
              placeholder='https://github.com/examplejs/'
              ref={(input) => {this.url = input}}
            ></input>
            <div className='desc'>Enter a homepage or GitHub Repo</div>
          </div>
          <div className='form-item'>
            <label>Vault Description <span className='req'>*</span></label>
            <textarea
              rows='4'
              ref={(input) => {this.description = input}}
            ></textarea>
          </div>
          <div className='form-button-container'>
            <button
              className='form-button'
              type='submit'
              onClick={this.createNewVault}
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
