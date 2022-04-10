import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './Views/Main';
import { ButtonAppBar } from './Components/ButtonAppBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        <Main />
      </div>
    );
  }
}

export default App;
