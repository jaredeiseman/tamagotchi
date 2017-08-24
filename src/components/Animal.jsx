import React from 'react';
import ControlsStatusContainer from './ControlsStatusContainer';
import AnimalModel from '../models/Animal';

class Animal extends React.Component {

  constructor() {
    super();
    this.state = {
      animal: new AnimalModel(),
      dead: false
    };
    // setInterval(() => {
    //   var newState = this.state.animal;
    //   newState.tiredness = this.state.animal.tiredness - .5;
    //   newState.boredom = this.state.animal.boredom - 2;
    //   newState.hunger = this.state.animal.hunger - 1;
    //   this.setState({animal: newState});
    // }, 200);

    this.handleAnimal = {
      feedAnimal: function() {
        var newState = this.state.animal;
        newState.hunger = 100;
        this.setState({animal: newState});
      },
      playWithAnimal: function() {
        var newState = this.state.animal;
        newState.boredom = 100;
        this.setState({animal: newState});
      },
      putAnimalToBed: function() {
        var newState = this.state.animal;
        newState.tiredness = 100;
        this.setState({animal: newState});
      }
    };

    this.handleAnimal.feedAnimal = this.handleAnimal.feedAnimal.bind(this);
    this.handleAnimal.playWithAnimal = this.handleAnimal.playWithAnimal.bind(this);
    this.handleAnimal.putAnimalToBed = this.handleAnimal.putAnimalToBed.bind(this);
  }

  componentDidUpdate() {
    if ((this.state.animal.boredom < 0 || this.state.animal.tiredness < 0 || this.state.animal.hunger < 0) && !this.state.dead) {
      this.setState({dead: true});
      alert('dead thing, try again');
      window.location = window.location;
    }
  }

  render() {
    var outerContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw'
    };
    var controlsStatusContainerStyle = {

    };
    var animalStyle = {
      height: '70%',
      backgroundColor: 'tomato',
      display: 'flex',
      justifyContent: 'center'
    };

    return (
      <div style={outerContainerStyle}>
        <div style={animalStyle}><img style={{height: '100%'}} src='https://gwenwsisson.files.wordpress.com/2014/07/day1axolotl_hi_res-e1404313810472.png' /></div>
        <ControlsStatusContainer style={controlsStatusContainerStyle} animal={this.state.animal} handleAnimal={this.handleAnimal}/>
      </div>
    );
  }
}

export default Animal;
