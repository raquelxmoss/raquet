import { ADD_MESSAGE } from '../actions/message_actions';

const seedMessages = [
  {
    id: 0,
    text: "Hey",
  },
  {
    id: 1,
    text: "Whatup"
  }
]

const initialState = { messages: seedMessages }

export default function messages (state = initialState, action) {
  switch(action.type) {
    case ADD_MESSAGE:
      return Object.assign({}, state, {messages: [...state.messages, {id: action.id, text: action.text}]});
    default:
      return state;
  }
};

