import React, { Component } from "react";
import { Route } from "react-router-dom";
// My Components
import Bookcase from "./Bookcase";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";
// Styles
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {
      user: {},
      books: [],
      searchResults: [],
      searchQuery: ""
    };
  }
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
      localStorage.setItem("user", json);
    }
  }

  handleSearchChange(query) {
    if (!query) {
      this.setState({ searchQuery: "", searchResults: [] });
    } else {
      this.setState({ searchQuery: query });
      BooksAPI.search(query)
        .then(results => {
          if (results.error) {
            return (results = []);
          } else {
            return results;
          }
        })
        .then(results => this.setState({ searchResults: results }));
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
        <Route
          path="/search"
          render={props => (
            <Search
              {...props}
              books={this.state.searchResults}
              searchQuery={this.state.searchQuery}
              handleSearchChange={this.handleSearchChange}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
