import React, { Component } from "react";
import { Route } from "react-router-dom";
// My Components
import Welcome from "./Welcome";
import Bookcase from "./Bookcase";
import * as BooksAPI from "./BooksAPI";
// Styles
import "./App.css";
class App extends Component {
    BooksAPI.getAll().then(books => this.setState({ books }));
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
