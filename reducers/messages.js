import { ADD_MESSAGE } from '../actions/message_actions';

const seedMessages = [
  {
    id: 0,
    subject: 'Hello',
    text: 'Hey there',
  },
  {
    id: 1,
    subject: 'Yo yo',
    text: 'Whatup'
  }
]

const initialState = { messages: seedMessages }

const messages = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      return Object.assign({}, state, {messages: [...state.messages, {id: action.id, subject: action.subject, text: action.text}]});
    default:
      return state;
  }
};

export default messages
