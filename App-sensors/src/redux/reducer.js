import { List } from 'immutable'

function counterReducer(state = List(), action) {
  switch (action.type) {
  case 'INCREMENT':
    return state
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

export default counterReducer ;
