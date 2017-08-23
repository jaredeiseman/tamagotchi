import React from 'react';
import HungerBar from './HungerBar';
import TirednessBar from './TirednessBar';
import BoredomBar from './BoredomBar';

var barStyles = {
  height: '33%',
  width: '100%',
  border: '1px solid black',
  background: '#b00'
};

function Status(props){
  return (
    <div style={{width: '30%', background: 'blue'}}>
      <HungerBar styles={barStyles} status={props.animal.hunger} />
      <TirednessBar styles={barStyles} status={props.animal.tiredness} />
      <BoredomBar styles={barStyles} status={props.animal.boredom} />
    </div>
  );
}

export default Status;
