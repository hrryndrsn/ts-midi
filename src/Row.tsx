import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Cell from './Cell'


interface RowProps {
  numCells: number, 
  sampleUrl: string,
}

interface RowState {
  numCells: number, 
  sampleUrl: string,
  samples: string[]
}


const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 90vw;
  height: 150px;
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

  render() {
    return (
      <RowContainer className="row">
        { this.state.samples.map((sample, index) => {
            return <Cell sampleUrl={this.state.sampleUrl} key={index}/>
          })
        }
      </RowContainer>
    );
  }
}

export default Row;
