import { addMessage, deleteMessage, editMessage } from '../actions/message_actions'

const initialState = {
  messages: [
    { id: 0, text: "Hello world" },
    { id: 1, text: "Once upon a midnight dreary" },
    { id: 2, text: "While I pondered, weak and weary" }
  ]
}

export default function messages(state = initialState, action) {
  switch action.type {
    case ADD_MESSAGE:
      return Object.assign({}, state, {
        messages: [
           ...state.messages,
           {
            id: messages.length++,
            text: action.text
           }
        ]
      })
    default: 
      return state
  }
}