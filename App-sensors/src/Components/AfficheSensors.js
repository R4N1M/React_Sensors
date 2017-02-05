import React from 'react';
import { connect } from 'react-redux';

class AfficheSensors extends React.Component{

  render(){
    //fonction qui retourne la liste des sensors exitant dans la liste
    var li = (<ul>
      { this.props.Liste_sensors.map(
          (s, i) => {
            return (<li key={i} >{JSON.stringify(s)}</li>)
          }
      ) }
      </ul> );
    //tester si la liste des snsors est vide ou non
    if (this.props.Liste_sensors.size === 0) {
      li = <div>La liste est vide</div>
    }
    return(
      <div className="AfficheSensors">
        {/*afficher tous les sensors recu du Mqtt */}
        {li}
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
      Liste_sensors : state.get("sensors")
  };
}

export default connect(stateToProps,null)(AfficheSensors);
