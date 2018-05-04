import React from "react";
// My Components
import ButtonAppBar from "./ButtonAppBar";
import BookDisplayGrid from "./BookDisplayGrid";

function Search(props) {
  return (
    <div>
      <ButtonAppBar userName={props.userName} />
      <input
        type="text"
        name="search"
        placeholder="Find your next book"
        onChange={e => props.handleSearchChange(e.target.value.trim())}
      />
      {props.searchQuery && (
        <BookDisplayGrid
          // bookShelf is the user's collection
          bookShelf={props.bookShelf}
          // books is the search results
          books={props.books}
          handleShelfChange={props.handleShelfChange}
        />
      )}
    </div>
  );
}

export default Search;
