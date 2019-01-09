import React, { Component, ChangeEvent, ChangeEventHandler } from "react";
import styled, { keyframes } from "styled-components";
import "./App.css";
import Row from "./Row";
import ControlBar from "./ControlBar";

const MainSection = styled.div`
  margin: 0 auto;
  width: 90vw;
  height: 80vh;
`;

class App extends Component {
  state = {
    playing: false,
    bpm: 120,
    currentStep: 0,
    numCells: 8
  };

  togglePlay = () => {
    this.setState({ playing: !this.state.playing });
  };

  tickTimer = () => {
    const interval = ((this.state.bpm / 60) * 1000) / this.state.numCells;
    console.log(interval);
    setInterval(() => {
      if (this.state.playing) {
        this.incrementStep();
      } else {
        return
      }
    }, interval);
  };

  incrementStep = () => {
    if (this.state.currentStep < this.state.numCells - 1) {
      this.setState({ currentStep: this.state.currentStep + 1 });
    } else {
      this.setState({ currentStep: 0 });
    }
  };

  updateBpm = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    this.setState({bpm: parseInt(e.currentTarget.value)})
  }

  componentDidMount = () => {
    this.tickTimer();
  };

  render() {
    return (
      <div className="App">
        <MainSection>
          <ControlBar
            togglePlay={this.togglePlay}
            isPlaying={this.state.playing}
            currentBpm={this.state.bpm}
            updateBpm={this.updateBpm}
          />
          <Row
            numCells={this.state.numCells}
            sampleUrl="/assets/808-kick.wav"
            currentStep={this.state.currentStep}
          />
          <Row
            numCells={this.state.numCells}
            sampleUrl="/assets/snare.wav"
            currentStep={this.state.currentStep}
          />
        </MainSection>
      </div>
    );
  }
}

export default App;
