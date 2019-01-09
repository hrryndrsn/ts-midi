import React, { Component } from "react";
import styled, { keyframes } from "styled-components";


interface CellProps {
  sample: HTMLAudioElement
  stepNumber: number
  currentStepNumber: number 
  isActive: boolean
}

interface CellState {
  active: boolean,
  sample: HTMLAudioElement
  armed: boolean,
}

const CellContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => (
    (props.theme.active === true) 
      ? "#5294e2" 
      : (props.theme.armed === true)
        ? "#00d2d3"
        : "#4b5162"
  )};
`

class Cell extends Component<CellProps, CellState> {
  state = {
    active: this.props.isActive,
    sample: this.props.sample,
    armed: false
  };
  
  //play sound programatically
  playSound = () => {
    const audio = this.props.sample
    this.toggleActive()
    audio.play()
      .then(() => {
        setTimeout(() => this.toggleActive(), 200)
      });
  }

  //make the cell active 
  toggleActive = () => {
    this.setState({active: !this.state.active})
  }

  //arm and unarm the cell
  toggleArmCell = () => {
    this.setState({armed: !this.state.armed})
  }

  //
  handleClick = () => {
    this.toggleArmCell()
  }

  componentDidUpdate = () => {
    if (this.props.stepNumber === this.props.currentStepNumber
        && this.state.armed
      ) {
      //its your turn to play!
      console.log('play now!', this.props.currentStepNumber)
      this.props.sample.play()
    }
  }

  render() {
    return (
      <div className="App">
        <CellContainer
          onClick={this.handleClick}
          theme={{
            active: this.props.isActive,
            armed: this.state.armed
          }}
        ></CellContainer>

      </div>
    );
  }
}

export default Cell;
