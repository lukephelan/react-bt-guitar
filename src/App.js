import React, { Component } from 'react';
import WebUSB from './components/WebUSB';
import VolumeSlider from './components/VolumeSlider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VolumeSlider />
        <WebUSB />
      </div>
    );
  }
}

export default App;
