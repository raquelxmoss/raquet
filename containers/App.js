import React, { Component, PropTypes } from 'react';
import MessageList from '../components/MessageList';
import ComposeMessage from '../components/ComposeMessage';
import { addMessage } from '../actions/message_actions';

class App extends Component {
  render() {
    const { dispatch } = this.props
    return (
      <div>
        <MessageList messages={this.props.messages} />
        <ComposeMessage createMessage={(subject, text) => dispatch(addMessage(subject, text))} />
      </div>
    )
  }
}

App.proptypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default App