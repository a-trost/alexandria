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
        <Route
          exact
          path="/"
          render={props => <Bookcase {...props} books={this.state.books} />}
        />
      </div>
    );
  }
}

export default App;
