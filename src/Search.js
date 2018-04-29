import React from 'react';
// My Components
import ButtonAppBar from './ButtonAppBar';
import BookList from './BookList';

function Search(props) {
return (
  <div>
    <ButtonAppBar />

    <input type="text" name="search"
    placeholder="Find your next book"
    onChange={e => props.handleSearchChange(e.target.value.trim())}
    />
      {props.searchQuery && <BookList books={props.books}/>}
  </div>
)
};

export default Search;