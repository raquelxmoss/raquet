import React, { Component, PropTypes } from 'react';

class MessageList extends Component {
  render() {
    return(
      <ul>
        {this.props.messages.map(message =>
          <li key={message.id}>
            <p><strong>{message.subject}</strong></p>
            <p>{message.text}</p>
          </li>
        )}
      </ul>
    )
  }
}

MessageList.proptypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default MessageList