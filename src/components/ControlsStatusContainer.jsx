import React from 'react';
import Status from './Status';
import Controls from './Controls';

var containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  height: '100px'
};

function ControlsStatusContainer(props) {
  return (
    <div style={containerStyle}>
      <Status animal={props.animal} />
      <Controls handleAnimal={props.handleAnimal}/>
    </div>
  );
}

export default ControlsStatusContainer;
