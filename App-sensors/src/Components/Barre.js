import React, {Component} from 'react';
import { connecter } from '../redux/action';

import {connect} from 'react-redux';

/*class Barre extends Component{
  render(){
    return (
      <div className="Barre" >
        <input  type="text" name="lien" />
        <button
          name="connect">CONNECT
          onClick={ () => {this.props.seConnecter()} }
        </button>
      </div>
    );
  }
}*/

const Barre = ( { seConnecter} ) => (
  <div className="Barre" >
    <input  type="text" name="lien" />
    <button
      name="connect"
      onClick={ () => { seConnecter() } }
    >
      CONNECT
    </button>
  </div>
);

const stateToProps = (state) => {
  return {};
}

const dispatchToProps = (dispatch) => {
  return {
    seConnecter: () => { dispatch(connecter); }
  };
}

export default connect(null, dispatchToProps)(Barre);
