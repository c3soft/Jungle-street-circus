import React, { Component } from 'react';

export default class Cards extends Component {
  render() {
    return (
      <div className="containercCards">
        <div className="titleCards">
          <h2>{this.props.name}</h2>
        </div>
        <img src={this.props.image.url} alt={this.props.slug} />
      </div>
    );
  }
}
