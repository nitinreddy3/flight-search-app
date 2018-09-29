import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';


function getWidthString(span) {
  if(!span) return;

  let width = span / 12 * 100;
  return `width: ${width}%`;
}

const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

const Col = styled.div`
  float: left;
  ${({xs}) => (xs ? getWidthString(xs) : "width: 100%")};
  

  @media only screen and (min-width: 768px) {
    ${({sm}) => sm && getWidthString(sm)};
  }

  @media only screen and (min-width: 992px) {
    ${({md}) => md && getWidthString(md)};
  }

  @media only screen and (min-width: 1200px) {
    ${({lg}) => lg && getWidthString(lg)};
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="12" sm="6" md="8">md: 8 - sm: 6 - xs: 12</Col>
          <Col xs="6" md="4">md: 4 - xs: 6</Col>
        </Row>
      </div>
    );
  }
}

export default App;
