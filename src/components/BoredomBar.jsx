import React from 'react';
import ProgressBar from './ProgressBar';

function BoredomBar(props) {
  return (
    <div style={props.styles}>
      <ProgressBar barWidth={props.status} />
    </div>
  );
}

export default BoredomBar;
