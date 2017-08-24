import React from 'react';
import Feed from './Feed';
import Sleep from './Sleep';
import Play from './Play';

var buttonStyle = {
  width: '100%;',
  height: '100%',
  background: 'red',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid black',
  color: '#fff',
  fontFamily: 'Comic Sans MS',
  cursor: 'pointer',
  flexGrow: '1'
};

function Controls(props){
  return (
    <div style={{background: 'green', width: '70%', display: 'flex'}}>
      <Feed buttonStyle={buttonStyle} feedAnimal={props.handleAnimal.feedAnimal} />
      <Sleep buttonStyle={buttonStyle} putAnimalToBed={props.handleAnimal.putAnimalToBed}/>
      <Play buttonStyle={buttonStyle} playWithAnimal={props.handleAnimal.playWithAnimal} />
    </div>
  );
}

export default Controls;
