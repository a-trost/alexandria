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
    this.fetchBookList = this.fetchBookList.bind(this);
    this.handleShelfChange = this.handleShelfChange.bind(this);
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
    this.fetchBookList();
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

  fetchBookList() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  handleShelfChange(book, shelf) {
    // console.log(book, shelf);
    if (shelf === 1) {
      BooksAPI.update(book, "currentlyReading").then(this.fetchBookList());
    } else if (shelf === 2) {
      BooksAPI.update(book, "wantToRead").then(this.fetchBookList());
    } else if (shelf === 3) {
      BooksAPI.update(book, "read").then(this.fetchBookList());
    } else if (shelf === 4) {
      BooksAPI.update(book, "none").then(this.fetchBookList());
    }
  }
  
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => (
            <Bookcase
              {...props}
              books={this.state.books}
              handleShelfChange={this.handleShelfChange}
            />
          )}
        />
        <Route
          path="/search"
          render={props => (
            <Search
              {...props}
              books={this.state.searchResults}
              searchQuery={this.state.searchQuery}
              // Pass the user's book shelf to compare against the search results:
              bookShelf={this.state.books}
              handleSearchChange={this.handleSearchChange}
              handleShelfChange={this.handleShelfChange}
            />
          )}
        />
      </div>
    );
  }
}
export default App;
