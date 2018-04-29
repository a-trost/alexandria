import React, { Component } from "react";
import { Route } from "react-router-dom";
// My Components
import Bookcase from "./Bookcase";
import * as BooksAPI from "./BooksAPI";
// Styles
import "./App.css";
class App extends Component {
  componentDidMount() {
    try {
      const userJson = localStorage.getItem("user");
      const user = JSON.parse(userJson);
      if (user) {
        this.setState(() => ({ user }));
      }
    } catch (e) {
      // Do nothing. If the data is corrupt we'll start from scratch.
    }
    BooksAPI.getAll().then(books => this.setState({ books }));
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      const json = JSON.stringify(this.state.user);
      localStorage.setItem('user',json);
    }
  }
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
