/*  
    The search component uses a text field and a BookDisplayGrid component.
    Based on the user's entry, the API returns books to the DisplayGrid.
*/
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
          search
          handleShelfChange={this.props.handleShelfChange}
          search={true}
        />
      )}
    </div>
  )}
}

export default Search;
