import { construireFichierJSON, instancier } from '../Sensors/Fonctions';
import {ajouter} from '../redux/action';
import {store} from '../index';


/* PArtie Mqtt */
var mqtt = require('mqtt')
var client;

export const connect_mqtt = (lien) => {
  client  = mqtt.connect(lien)

  client.on('connect', function () {
    client.subscribe('#')
  })
  ajout();
}


export const ajout = () => {
  client.on('message', function (topic, message) {
    //convertir les donnees  sous forme d'un JSON
  var d = construireFichierJSON(topic.toString(), message.toString());

  // Instancier les sensors
  var instance = instancier(d);

  store.dispatch(ajouter(d));
  /* Recuperer les donnees deja envoyèes et tester si l'identifiant existe deja: */
  /* si oui on change juste la valeur sinon on affiche le nouveau sensors
  try {
    var tabid = document.querySelector('#'+instance[0].Id);
    tabid.textContent = instance[1].Value;

  } catch (e) {
    const tr = document.createElement('tr');
    const tdID = document.createElement('td');
    const tdType = document.createElement('td');
    const tdValue = document.createElement('td');
    tdValue.setAttribute('id', instance[0].Id);

    tdID.textContent = instance[0].Id;
    tdType.textContent = instance[0].Type;
    tdValue.textContent = instance[1].Value;

    tr.appendChild(tdID);
    tr.appendChild(tdType);
    tr.appendChild(tdValue);

    document.querySelector('#tableau').appendChild(tr);
  }*/
    // message is Buffer
    console.log(message.toString())
  })
}



//'ws://localhost:8080'
