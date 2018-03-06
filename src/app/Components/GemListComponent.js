'use strict'

import React from 'react';
import '../Styles/GemListComponent.css';

export class GemListComponent extends React.Component {
  cleanType(type) {
    const lowerType = type.toLowerCase();
    return lowerType.charAt(0).toUpperCase() + lowerType.slice(1);
  }

  render() {
    const type = this.cleanType(this.props.gem.type);
    return (
      <div className='gem-list-item'>
        <h5>{this.props.gem.title}</h5>
        <p><a href={`http://${this.props.gem.url}`}>{this.props.gem.url}</a>
          <br/>
          {type}</p>
      </div>
    )
  }
}
