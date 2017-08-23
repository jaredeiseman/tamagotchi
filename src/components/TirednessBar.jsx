import React from 'react';
import ProgressBar from './ProgressBar';

function TirednessBar(props) {
  return (
    <div style={props.styles}>
      <ProgressBar barWidth={props.status} />
    </div>
  );
}

export default TirednessBar;
