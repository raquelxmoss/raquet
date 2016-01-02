export const ADD_MESSAGE = 'ADD_MESSAGE'
export const EDIT_MESSAGE = 'EDIT_MESSAGE'
export const DELETE_MESSAGE = 'DELETE MESSAGE'

export function addMessage(text) {
  return {
    type: ADD_MESSAGE,
    text
  }
}

export function deleteMessage(id) {
  return {
    type: DELETE_MESSAGE,
    id
  }
}

export function editMessage(id, text) {
  return {
    type: EDIT_MESSAGE,
    id,
    textexport 
  }
}
