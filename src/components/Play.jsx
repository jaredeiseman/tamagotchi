import React from 'react';

function Play(props){
  return (
    <div style={props.buttonStyle} onClick={props.playWithAnimal}>
      <p>PLAY WITH IT!</p>
    </div>
  );
}

export default Play;
