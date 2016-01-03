export const ADD_MESSAGE = 'ADD_MESSAGE'

let nextId = 2

export function addMessage(text) {
  return {
    type: ADD_MESSAGE,
    id: nextId++,
    text
  }
}