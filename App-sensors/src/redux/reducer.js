import { List } from 'immutable'
import connect_mqtt from '../MQTT/mqtt';

function counterReducer(state = 0, action) {
  switch (action.type) {
  case 'CONNECTER':
    connect_mqtt();
    return state
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

export default counterReducer ;
