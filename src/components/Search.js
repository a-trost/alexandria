import React, { Component } from "react";
// My Components
import ButtonAppBar from "./ButtonAppBar";
import BookDisplayGrid from "./BookDisplayGrid";
import TextField from 'material-ui/TextField';


class Search extends Component {
  componentDidMount() {
    // This resets the search results
    this.props.handleSearchChange("");
  }

  render() {
  return (
    <div>
      <ButtonAppBar userName={this.props.userName} search />
      <TextField
          id="search"
          label="Search books"
          type="search"
          className='search-box'
          margin="normal"
          autoFocus
          onChange={e => this.props.handleSearchChange(e.target.value.trim())}
        />
      {this.props.searchQuery && (
        <BookDisplayGrid
          // bookShelf is the user's collection
          bookShelf={this.props.bookShelf}
          // books is the search results
          books={this.props.books}
          handleShelfChange={this.props.handleShelfChange}
          search={true}
        />
      )}
    </div>
  )}
}

export default Search;
