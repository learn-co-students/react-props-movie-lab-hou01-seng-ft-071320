import React, { Component } from 'react';

export default class CardFront extends Component {
  
  render() {
    const prop = "you spin me right round"
    return (
      <div className="card-front" style={{backgroundImage: `url(${prop})`}}>
      </div>
    )
  }
}
