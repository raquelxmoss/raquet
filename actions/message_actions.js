export const ADD_MESSAGE = 'ADD_MESSAGE';

let nextId = 2

export function addMessage(text) {
  let id = nextId ++
  return {
    type: ADD_MESSAGE,
    id,
    text
  };
}