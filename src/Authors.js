import React, { Component } from 'react';

class Authors extends Component {

  render() {
    return (
      <div>
      <p>Written By:{this.props.text}</p>
      </div>
    )
  }
}

export default Authors
