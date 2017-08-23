import React from 'react';

function Play(props){
  return (
    <div style={{width: '33%'}}>
      <p onClick={props.playWithAnimal}>Play Component Works</p>
    </div>
  );
}

export default Play;
