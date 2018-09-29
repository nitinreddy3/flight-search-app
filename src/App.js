import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';


const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

const Col = styled.div`
  float: left;
  width: 100;

  @media only screen and (min-width: 768px) {
    width: ${props => (props.span ? props.span / 12 * 100 : "8.33")}%;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Row>
          <Col span="6">Hello1</Col>
          <Col span="6">Hello2</Col>
        </Row>
      </div>
    );
  }
}

export default App;
