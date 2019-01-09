import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Cell from './Cell'


interface RowProps {
  numCells: number, 
  sampleUrl: string,
  currentStep: number
}

interface RowState {
  numCells: number, 
  sampleUrl: string,
  samples: string[]
}


const RowContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.theme.numCells}, 1fr)`};
  width: 90vw;
  height: 100px;
  margin: 0 auto;
`

class Row extends Component<RowProps, RowState> {
  state = {
    numCells: this.props.numCells,
    sampleUrl: this.props.sampleUrl,
    samples: [],
  };

  componentDidMount = () => {
    let newSampleList = [];
    for (let index = 0; index < this.state.numCells; index++) {
      newSampleList.push(this.state.sampleUrl)
      this.setState({samples: newSampleList})
    }
  }

  initSample = () => {
    const audio = new Audio(process.env.PUBLIC_URL + this.state.sampleUrl)
    return audio
  }

  render() {
    return (
      <RowContainer className="row" theme={{numCells: this.props.numCells}}>
        { this.state.samples.map((sample, index) => {
            return (
              <Cell 
                key={index}
                stepNumber={index}
                currentStepNumber={this.props.currentStep}
                sample={this.initSample()}
                isActive={index === this.props.currentStep}
              />
            )
          })
        }
      </RowContainer>
    );
  }
}

export default Row;
