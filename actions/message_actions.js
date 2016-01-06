export const ADD_MESSAGE = 'ADD_MESSAGE';

let nextId = 2

export function addMessage(subject,text) {
  return {
    type: ADD_MESSAGE,
    id: nextId++,
    subject,
    text
  };
}