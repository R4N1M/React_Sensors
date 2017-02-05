import React, {Component} from 'react';
import { connecter } from '../redux/action';

import {connect} from 'react-redux';

const l = 'ws://localhost:8080';

class Barre extends Component{
  construct() {
    this.setState(
      {
        string:'ws://localhost:8080'
      }
    );
  }
  render(){
    return (
      <div className="Barre" >
        <input
          type="text"
          name="lien"
          onChange={
           (event) => {
             this.setState({
               string: event.target.value
             })
           }
         }
        />
        <button
          name="connect"
          onClick={ () => { this.props.seConnecter(this.state.string) } }
        >
          CONNECT
        </button>
      </div>

    );
  }
}

/*const Barre = ( { seConnecter} ) => (
  <div className="Barre" >
    <input  type="text" name="lien" />
    <button
      name="connect"
      onClick={ () => { seConnecter(l) } }
    >
      CONNECT
    </button>
  </div>
);*/

//relier les actions avec le store
const stateToProps = (state) => {
  return {};
}

const dispatchToProps = (dispatch) => {
  return {
    seConnecter: (lien) => {
                          dispatch(connecter(lien));
                          }
  };
}

export default connect(null, dispatchToProps)(Barre);
