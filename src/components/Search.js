import React from "react";
// My Components
import ButtonAppBar from "./components/ButtonAppBar";
import BookDisplayGrid from "./components/BookDisplayGrid";
import TextField from 'material-ui/TextField';


function Search(props) {
  return (
    <div>
      <ButtonAppBar userName={props.userName} />
      <TextField
          id="search"
          label="Search books"
          type="search"
          className='search-box'
          margin="normal"
          onChange={e => props.handleSearchChange(e.target.value.trim())}
        />
      {props.searchQuery && (
        <BookDisplayGrid
          // bookShelf is the user's collection
          bookShelf={props.bookShelf}
          // books is the search results
          books={props.books}
          handleShelfChange={props.handleShelfChange}
          search={true}
        />
      )}
    </div>
  );
}

export default Search;
