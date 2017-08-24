import React from 'react';

function Feed(props){
  return (
    <div style={props.buttonStyle} onClick={props.feedAnimal}>
      <p>Feed It!</p>
    </div>
  );
}

export default Feed;
