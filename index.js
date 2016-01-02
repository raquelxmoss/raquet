import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

import { messages } from './reducers/message';
import { addMessage, deleteMessage } from './actions/message_actions'

function mapStateToProps(state) {
  return {
    messages: messages.state.messages
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddMessage: () => dispatch(addMessage()),
    onDeleteMessage: () => dispatch(deleteMessage())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default class MessageForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      messages.map(function(){
        <li>{this.text}</li>
      })
    )
  }
}


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>hi</p>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);