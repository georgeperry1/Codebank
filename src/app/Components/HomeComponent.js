'use strict';

import React from 'react';
import '../Styles/HomeComponent.css';

export class HomeComponent extends React.Component {

  handleClick = (props) => {
    this.props.goToVaultsPage();
  }

  render() {
    return (
      <div>
        <div className='row align-center'>
          <div className='col col-6' id='home-writing'>
            <p>The Online Bank</p>
            <br/>
            <p>for Coding Content</p>
          </div>
        </div>
        <div className='row align-center' id='explore-button-container'>
          <div className='col col-2'>
            <p className='explore-button'><a href='/#/vaults'>Explore Vaults</a></p>
          </div>
        </div>
      </div>
    )
  }
}
