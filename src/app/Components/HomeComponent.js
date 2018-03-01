'use strict';

import React from 'react';
import '../Styles/HomeComponent.css';

export const HomeComponent = (props) => (
  <div>
    <div className='row'>
      <div className='col col-3'></div>
      <div className='col col-6' id='home-writing'>
        <h2>The Online Bank</h2>
        <br/>
        <h2>for Coding Content</h2>
      </div>
      <div className='col col-3'></div>
    </div>
    <div className='row' id='home-button-container'>
      <div className='col col-5'></div>
      <div className='col col-2'>
        <button className='home-button'>Explore Vaults</button>
      </div>
      <div className='col col-5'></div>
    </div>
  </div>
)
