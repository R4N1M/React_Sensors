import { List } from 'immutable'
import connect_mqtt from '../MQTT/mqtt';

const etatInitiale = {};

function counterReducer(state = etatInitiale, action) {
  switch (action.type) {
  case 'CONNECTER':
    connect_mqtt(action.lien);
    return state
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

export default counterReducer ;
