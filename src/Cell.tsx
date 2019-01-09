import React, { Component } from "react";
import styled, { keyframes } from "styled-components";


interface CellProps {
  sample: HTMLAudioElement
}

interface CellState {
  active: boolean,
  sample: HTMLAudioElement
}

const CellContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props => props.theme === true ? "#5294e2" : "#4b5162")};
`

class Cell extends Component<CellProps, CellState> {
  state = {
    active: false,
    sample: this.props.sample
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

  toggleActive = () => {
    this.setState({active: !this.state.active})
  }

  render() {
    return (
      <div className="App">
        <CellContainer
          onClick={this.playSound}
          theme={this.state.active}
        ></CellContainer>

      </div>
    );
  }
}

export default Cell;
