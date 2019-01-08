import React, { Component } from "react";
import styled, { keyframes } from "styled-components";


interface CellProps {
  sampleUrl: string
}

interface CellState {
  sampleUrl: string
}

const CellContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #4b5162;
  border: pink 1px solid ;
`

class Cell extends Component<CellProps, CellState> {
  state = {
    sampleUrl: this.props.sampleUrl
  };

  initSamples = () => {
    const audio = new Audio(process.env.PUBLIC_URL + this.state.sampleUrl)
    return audio
  }

  handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const audio = this.initSamples()
    audio.play();
  }

  render() {
    return (
      <div className="App">
        <CellContainer
          onClick={this.handleClick}
        ></CellContainer>

      </div>
    );
  }
}

export default Cell;
