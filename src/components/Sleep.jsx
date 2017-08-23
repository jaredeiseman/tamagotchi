import React from 'react';

function Sleep(props){
  return (
    <div style={{width: '33%'}}>
      <p onClick={props.putAnimalToBed}>Sleep Component Works</p>
    </div>
  );
}

export default Sleep;
