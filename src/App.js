import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox';

class App extends Component {
  render() {
    const isFocused = true;
    return (
      <div className="App">
        <SearchBox IsFocused={isFocused}/>  
      </div>
    );
  }
}

export default App;
