import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isFocused: true
    }
  }

  render() {
    const {isFocused} = this.state;
    return (
      <div className="App">
        <SearchBox isFocused={isFocused}/>  
      </div>
    );
  }
}

export default App;
