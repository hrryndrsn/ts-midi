import React, { Component, ChangeEvent } from "react";
import styled, { keyframes } from "styled-components";

const ControlBarContainer = styled.div`
  height: 10vh;
`

const PlayPauseButton = styled.button`

`

const BmpControlInput = styled.input`
  
`

interface ControlBarProps{
  togglePlay: () => void
  updateBpm: (e: React.FormEvent<HTMLInputElement>) => void
  isPlaying: boolean
  currentBpm: number
}

class ControlBar extends Component<ControlBarProps, {}> {
  render() {
    return (
      <div className="App">
        <ControlBarContainer>
          <BmpControlInput
            type={"number"}
            value={this.props.currentBpm}
            onChange={this.props.updateBpm}
          />
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
