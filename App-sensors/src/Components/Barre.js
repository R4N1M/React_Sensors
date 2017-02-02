import React, {Component} from 'react';

require('../MQTT/mqtt.js');

/*class Barre extends Component{
  render(){
    return (
      <div className="Barre" >
      <input  type="text" name="lien" />
      </div>
    );
  }
}*/

const Barre = () => (
  <div className="Barre" >
    <input  type="text" name="lien" />
    <button name="connect">CONNECT</button>
  </div>
);

export default Barre;
