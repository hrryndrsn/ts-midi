import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Cell from './Cell'


const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 90vw;
  height: 150px;
  margin: 0 auto;
`

class Row extends Component {
  state = {
    numCells: 6,
    samples: []
  };

  componentDidMount = () => {
    let newSampleList = [];
    for (let index = 0; index < this.state.numCells; index++) {
      newSampleList.push("/assets/snare.mav")
      this.setState({samples: newSampleList})
    }
  }

  render() {
    return (
      <RowContainer className="row">
        { this.state.samples.map((sample, index) => {
            return <Cell sampleUrl="/assets/snare.wav" key={index}/>
          })
        }
      </RowContainer>
    );
  }
}

export default Row;
