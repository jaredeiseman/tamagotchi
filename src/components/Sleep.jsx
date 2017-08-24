import React from 'react';

function Sleep(props){
  return (
    <div style={props.buttonStyle} onClick={props.putAnimalToBed}>
      <p>Make It Sleep!</p>
    </div>
  );
}

export default Sleep;
