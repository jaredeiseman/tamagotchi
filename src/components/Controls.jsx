import React from 'react';
import Feed from './Feed';
import Sleep from './Sleep';
import Play from './Play';

// var buttonStyle = {
//   width: '33%'
// };

function Controls(props){
  return (
    <div style={{background: 'green', width: '70%', display: 'flex'}}>
      <Feed feedAnimal={props.handleAnimal.feedAnimal} />
      <Sleep putAnimalToBed={props.handleAnimal.putAnimalToBed}/>
      <Play playWithAnimal={props.handleAnimal.playWithAnimal} />
    </div>
  );
}

export default Controls;
