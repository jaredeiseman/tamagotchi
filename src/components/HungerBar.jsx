import React from 'react';
import ProgressBar from './ProgressBar';

function HungerBar(props) {
  return (
    <div style={props.styles}>
      <ProgressBar barWidth={props.status} />
    </div>
  );
}

export default HungerBar;
