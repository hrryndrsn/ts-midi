import React, { Component } from "react";
import styled, { keyframes } from "styled-components";


interface CellProps {
  sampleUrl: string
}

interface CellState {
  sampleUrl: string
  active: boolean
}

const CellContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props => props.theme === true ? "fff" : "#000")};
  border: pink 1px solid ;
`

class Cell extends Component<CellProps, CellState> {
  state = {
    sampleUrl: this.props.sampleUrl,
    active: false,
  };

  initSamples = () => {
    const audio = new Audio(process.env.PUBLIC_URL + this.state.sampleUrl)
    return audio
  }

  handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const audio = this.initSamples()
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
          onClick={this.handleClick}
          theme={this.state.active}
        ></CellContainer>

      </div>
    );
  }
}

export default Cell;
