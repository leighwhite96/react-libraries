import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicButton from './Buttons/BasicButton'
import ColouredButtons from './Buttons/ColouredButtons'
import LikeButton from './Buttons/LikeButton'
import HeaderExample from './Header'
import DividedGrid from './Grid'
import GridColor from './GridColour'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome To My Page!</h1>
          <p className="App-intro">
          I am practicing my React Skills and using the Semantic UI library!
          </p>
          <BasicButton content="Click" />
          <ColouredButtons />
          <LikeButton/>
        </header>
        <HeaderExample />
        <DividedGrid />
        <GridColor/>
      </div>
    );
  }
}

export default App;
