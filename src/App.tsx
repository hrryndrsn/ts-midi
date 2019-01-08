import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import "./App.css";
import { threadId } from "worker_threads";


const Cell = styled.div`
  width: 200px;
  height: 200px;
  background: blue;
`

class App extends Component {
  state = {
    position: {
      x: innerWidth/2,
      y: innerHeight/2
    },
  };

  initSamples = () => {
    const audio = new Audio(process.env.PUBLIC_URL + '/assets/muscle-car.mp3')
    return audio
  }

  handleClick = (e: React.MouseEvent<HTMLElement>) => {
    
    const audio = this.initSamples()
    audio.play();
  }

  render() {
    return (
      <div className="App">
        <img src={process.env.PUBLIC_URL + '/assets/pupper.jpg'}/>
        <Cell
          onClick={this.handleClick}
        >derp</Cell>

      </div>
    );
  }
}

export default App;
