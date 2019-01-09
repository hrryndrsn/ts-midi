import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const ControlBarContainer = styled.div`
  height: 10vh;
`

const PlayPauseButton = styled.button`

`

interface ControlBarProps{
  togglePlay: () => void
  isPlaying: boolean
}

class ControlBar extends Component<ControlBarProps, {}> {
  render() {
    return (
      <div className="App">
        <ControlBarContainer>
          <PlayPauseButton
            onClick={this.props.togglePlay}
          >
            {this.props.isPlaying ? 'Pause' : 'Play'}
          </PlayPauseButton>
        </ControlBarContainer>
      </div>
    );
  }
}

export default ControlBar;
