import React from 'react';
import { connecter } from '../redux/action';

class AfficheSensors extends React.Component{
  render(){
    return(
      <div className="AfficheSensors">
      {/*afficher tous les sensors recu du Mqtt */}
      <ul style="list-style-type:circle">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
      </div>
    );
  }
}


export default AfficheSensors;
