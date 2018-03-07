'use strict'

import React from 'react';
import '../Styles/CreateGemWindowComponent.css';

export class CreateGemWindowComponent extends React.Component {
  handleClick = () => {
    const newGemInfo = {
      title: this.title.value,
      url: this.url.value,
      type: this.type.value,
      parentVaultId: this.props.parentVault._id,
      parentCryptId: this.props.parentCrypt._id
    };
    this.props.createNewGem(newGemInfo);
    this.title.value = null;
    this.url.value = null;
    this.type.value = null;
  }

  render() {
    return (
      <div className='create-gem-window'>
        <div className='create-gem-window-inner'>
          <form className='form create-gem-window-form'>
            <h3 className='bank-list-heading'>Create a New Gem</h3>
            <hr/>
            {/* TITLE */}
            <div className='form-item'>
              <label>Gem Title<span className='req'>*</span></label>
              <input
                className='create-crypt-input'
                type='text'
                placeholder='Introduction to JSX'
                ref={(input) => {this.title = input}}
                required
              ></input>
              <div className='desc'>Gems can be articles, videos, courses or GitHub Repos you find useful</div>
            </div>
            {/* URL */}
            <div className='form-item'>
              <label>Gem URL<span className='req'>*</span></label>
              <input
                className='create-crypt-input'
                type='text'
                placeholder='https://medium.com/@tomkadwill/introduction-to-jsx-d7cb7b10ad12'
                ref={(input) => {this.url = input}}
                required
              ></input>
            </div>
            {/* TYPE */}
            <div className='form-item'>
              <label>Gem Type<span className='req'>*</span></label>
              <input
                className='create-crypt-input'
                type='text'
                placeholder='Article, Video, Course or Repo'
                ref={(input) => {this.type = input}}
                required
              ></input>
            </div>

            {/* BUTTON */}
            <div className='form-button-container'>
              <button
                className='create-vault-form-button'
                type='button'
                onClick={this.handleClick}
              >
                Submit Gem
              </button>
              <div className='space'></div>
              <div className='desc'>Gem submissions will be subject to moderation</div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
