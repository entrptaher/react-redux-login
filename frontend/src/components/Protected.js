import React, { Component } from 'react';

export default class Protected extends Component {
  render() {
    const token = localStorage.getItem('jwtToken');

    return <div>Your token: {token}</div>;
  }
}
