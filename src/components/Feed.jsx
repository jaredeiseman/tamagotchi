import React from 'react';

function Feed(props){
  return (
    <div style={{width: '33%'}}>
      <p onClick={props.feedAnimal}>Feed Component Works</p>
    </div>
  );
}

export default Feed;
