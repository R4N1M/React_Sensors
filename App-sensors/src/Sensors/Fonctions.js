import {Data,
          Datum,
          TimeSeries,
          Sensor,
          Temperature,
          Door,
          Humidity,
          FanSpeed,
          Light,
          PERCENT,
          POSITIVE_NUMBER,
          ON_OFF,
          OPEN_CLOSE } from './ClassSensors';

/************************************************************************************************************************** */
/********************************   PARTIE  fonctions            *********************************************************/
/****************************************************************************************************************************/


/* Cette fonction recupere les donnees du fichier Json et les stocke
 * sous forme des objets instanciés dans un tableau qui contient deux tableau:
 * le premier pour les objets de la classe Sensor et le deuxieme pour les objets de
 * la classe Data
 */
export function instancier(data) {
  var Sensors = ''; // Tableau des sensors
  var Data = ''; // tableau des data

    /*  Instancier les donnees  */
  switch (data[1].type) {
    case 'TEMPERATURE':
      Sensors = new Temperature(data[0].ID);
      Data = new Datum(data[1].value, Sensors);
      break;

    case 'DOOR':
      Sensors = new Door(data[0].ID);
      Data = new Datum(data[1].value, Sensors);
      break;

    case 'FAN_SPEED':
      Sensors = new FanSpeed(data[0].ID);
      Data = new Datum(data[1].value, Sensors);
      break;

    case 'HUMIDITY':
      Sensors = new Humidity(data[0].ID);
      Data = new Datum(data[1].value, Sensors);
      break;

    case 'LIGHT':
      Sensors = new Light(data[0].ID);
      Data = new Datum(data[1].value, Sensors);
      break;

    case 'POSITIVE_NUMBER':
      Sensors = new POSITIVE_NUMBER(data[0].ID);
      Data = new Datum(data[1].value, Sensors);
      break;

    case 'PERCENT':
      Sensors = new PERCENT(data[0].ID);
      Data = new Datum(data[1].value, Sensors);
      break;

    case 'ON_OFF':
      Sensors = new ON_OFF(data[0].ID);
      Data = new Datum(data[1].value, Sensors);
      break;

    case 'OPEN_CLOSE':
      Sensors = new OPEN_CLOSE(data[0].ID);
      Data = new Datum(data[1].value, Sensors);
      break;

    default:
      throw Error('Ce type n\'existe pas');
      break;
  }

  const Donnees = []; // Tableau des donnees contient les deux tableaux Sensors et Data
  Donnees[0] = Sensors;
  Donnees[1] = Data;
  return Donnees;
}

// Convertir le fichier JSON
export function construireFichierJSON(topic, message) {
  var t = topic.split('/');
  var donnee = '';
  var string = "[ {\"ID\": \""+t[1]+"\"} ,"+message+"]" ;
  donnee = JSON.parse(string);
  return (donnee);
}
