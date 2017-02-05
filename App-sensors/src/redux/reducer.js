import { List, Map } from 'immutable'
import { connect_mqtt, ajout } from '../MQTT/mqtt';

const etatInitiale = Map().set("sensors", List());

function counterReducer(state = etatInitiale, action) {
  switch (action.type) {
  case 'CONNECTER':
    connect_mqtt(action.lien);
    return state
  case 'AJOUTER':
    const sensor = state.get('sensors').findKey( (objet) => objet[0].ID === action.objet[0].ID);
    console.log(sensor);

    if(typeof sensor === 'undefined'){
      var next_state = state.get('sensors').push(action.objet) ;
      return state.set("sensors",next_state);
    }else {
      var next_state = state.get('sensors').set(sensor, action.objet);
      return state.set("sensors",next_state);
    }
  case 'METTREÀJOUR':
    return state
  default:
    return state
  }
}

export default counterReducer ;
