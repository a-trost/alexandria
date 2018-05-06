import React, { Component } from "react";
import { Route } from "react-router-dom";
// My Components
import Bookcase from "./components/Bookcase";
import Search from "./components/Search";
import Welcome from "./components/Welcome";
import * as BooksAPI from "./BooksAPI";
import CornerSnackbar from "./components/CornerSnackbar"
// Styles
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.fetchBookList = this.fetchBookList.bind(this);
    this.handleShelfChange = this.handleShelfChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
    this.state = {
      userName: "",
      books: [],
      searchResults: [],
      searchQuery: "",
      snackbarOpen:false,
      snackbarMessage:""
    };
  }
  componentDidMount() {
    try {
      const userNameJson = localStorage.getItem("userName");
      const userName = JSON.parse(userNameJson);
      if (userName) {
        this.setState(() => ({ userName }));
      }
      const booksJson = localStorage.getItem("books");
      const books = JSON.parse(booksJson);
      if (books) {
        this.setState(() => ({ books }));
      }
    } catch (e) {
      // Do nothing. If the data is corrupt we'll start from scratch.
    }
    this.fetchBookList();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.userName !== this.state.userName) {
      const json = JSON.stringify(this.state.userName);
      localStorage.setItem("userName", json);
    }
    if (prevState.books !== this.state.books) {
      const json = JSON.stringify(this.state.books);
      localStorage.setItem("books", json);
    }
  }
  
  debounceTimeout = null;

  handleSearchChange(query) {
    if (!query) {
      this.setState({ searchQuery: "", searchResults: [] });
    } else {
      this.setState({ searchQuery: query });
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(()=>this.search(query),400);
    }
  }

  search(query) {
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

  handleNameChange(name) {
    if (!name) {
      this.setState({ userName: "" });
    } else {
      this.setState({ userName: name.target.value });
    }
  }

  fetchBookList() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  handleShelfChange(book, shelf, closeMenu) {
    // console.log(book, shelf);
    if (shelf === 1) {
      BooksAPI.update(book, "currentlyReading").then(this.fetchBookList()).then(this.openSnackbar(book, " moved to Currently Reading"));
    } else if (shelf === 2) {
      BooksAPI.update(book, "wantToRead").then(this.fetchBookList()).then(this.openSnackbar(book, " moved to Want to Read"));
    } else if (shelf === 3) {
      BooksAPI.update(book, "read").then(this.fetchBookList()).then(this.openSnackbar(book, " moved to Read"));
    } else if (shelf === 4) {
    BooksAPI.update(book, "none").then(this.fetchBookList()).then(this.openSnackbar(book, " removed from shelves"));
    }
    closeMenu();
  }

  openSnackbar(book, message) {
    this.setState({snackbarMessage:(book.title + message)});
    this.setState({snackbarOpen:true});
  }
  closeSnackbar() {
    this.setState({snackbarOpen:false})
  }

  render() {
    return (
      <div className="App">
      <CornerSnackbar
          open={this.state.snackbarOpen}
          message={this.state.snackbarMessage}
          onClose={this.closeSnackbar}
        />
        <Route
          path="/welcome"
          render={props => (
            <Welcome
              {...props}
              userName={this.state.userName}
              handleNameChange={this.handleNameChange}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Bookcase
              {...props}
              userName={this.state.userName}
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
              userName={this.state.userName}
              books={this.state.searchResults}
              searchQuery={this.state.searchQuery}
              // Pass the user's book shelf to compare against the search results:
              bookShelf={this.state.books}
              handleSearchChange={this.handleSearchChange}
              handleShelfChange={this.handleShelfChange}
              search={true}
            />
          )}
        />
      </div>
    );
  }
}
export default App;
