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
        <div className='gem-list-item-info'>
          <h5 className='gem-list-item-header'>{this.props.gem.title}</h5>
          <p><a href={`http://${this.props.gem.url}`}>{this.props.gem.url}</a>
            <br/>
            {type}
          </p>
        </div>
        <div className='gem-list-item-vote'>
          <i className='up-vote'></i>
          Score: {this.props.gem.votes}
          <i className='down-vote'></i>
        </div>
      </div>
    )
  }
}
