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
  }

  togglePlay = () => {
    this.setState({playing: !this.state.playing})
  }

  render() {
    return (
      <div className="App">
        <MainSection>
          <ControlBar 
            togglePlay={this.togglePlay}
            isPlaying={this.state.playing}
          />
          <Row numCells={6} sampleUrl="/assets/snare.wav"/>
        </MainSection>
      </div>
    );
  }
}

export default App;
