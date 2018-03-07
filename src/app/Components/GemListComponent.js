'use strict'

import React from 'react';
import '../Styles/GemListComponent.css';

export class GemListComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      votes: 0
    }
  }

  handleClickUp = () => {
    this.setState({
      votes: this.state.votes + 1
    })
  }

  handleClickDown = () => {
    this.setState({
      votes: this.state.votes - 1
    })
  }

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
          <div
            className='up-vote'
            onClick={this.handleClickUp}
          ></div>
          Score: {this.state.votes}
          <div
            className='down-vote'
            onClick={this.handleClickDown}
          ></div>
        </div>
      </div>
    )
  }
}
