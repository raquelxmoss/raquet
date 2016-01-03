import React, { Component } from 'react';

export default class MessageList extends Component {
  render() {
    const messages = this.props
    {messages.map(message =>
      <li>{message.text}</li>
    )}
  }
}