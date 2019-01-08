import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import "./App.css";
import Row from "./Row";

const MainSection = styled.div`
  margin: 0 auto;
  width: 90vw;
  height: 80vh;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainSection>
          <Row />
        </MainSection>
      </div>
    );
  }
}

export default App;
