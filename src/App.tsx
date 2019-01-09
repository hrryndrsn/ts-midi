import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import "./App.css";
import Row from "./Row";
import ControlBar from './ControlBar'

const MainSection = styled.div`
  margin: 0 auto;
  width: 90vw;
  height: 80vh;
`

class App extends Component {
  state = {
    playing: false,
    bpm: 120,
    currentStep: 0,
    numCells: 8
  }

  togglePlay = () => {
    this.setState({playing: !this.state.playing})
  }

  tickTimer = () => {
    const interval = ((this.state.bpm / 60) * 1000) / this.state.numCells
    console.log(interval)
    setInterval(() => {
      this.incrementStep()
    }, interval)
  }

  incrementStep = () => {
    if (this.state.currentStep < (this.state.numCells - 1)) {
      this.setState({currentStep: this.state.currentStep + 1})
    } else {
      this.setState({currentStep: 0})
    }
  }

  componentDidMount = () => {
    this.tickTimer()
  }

  render() {
    return (
      <div className="App">
        <MainSection>
          <ControlBar 
            togglePlay={this.togglePlay}
            isPlaying={this.state.playing}
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
