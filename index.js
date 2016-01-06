import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import App from './containers/App';
import messages from './reducers/messages';
import { addMessage } from './actions/message_actions';

let store = createStore(messages)

const mapStateToProps = (state) => {
  return { messages: state.messages }
}

const MainApp = connect(mapStateToProps)(App)

render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById('root')
)