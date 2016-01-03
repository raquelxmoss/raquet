import React, { Component, PropTypes } from 'react';
import { addMessage } from '../actions/message_actions';
// import { MessageList } from '../components/MessageList'

class App extends Component {
  render() {
    const messages = this.props
    console.log(messages)
    return (
      <div>
        <p>HI</p>
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