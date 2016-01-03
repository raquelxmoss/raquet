import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import App from './containers/App'
import messages from './reducers/messages'

let store = createStore(messages)
let state = store.getState()

function mapStateToProps(state) {
  return { messages: state }
}

let MainApp = connect(mapStateToProps)(App)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)