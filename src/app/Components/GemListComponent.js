'use strict'

import React from 'react';
import '../Styles/GemListComponent.css';

export class GemListComponent extends React.Component {
  render() {
    return (
      <div className='gem-list-item'>
        <h5>{this.props.gem.title}</h5>
        <p>{this.props.gem.url}
          <br/>
          {this.props.gem.type.toUpperCase()}</p>
      </div>
    )
  }
}
