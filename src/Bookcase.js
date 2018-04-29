import React from 'react';
// My Components
import ButtonAppBar from './ButtonAppBar';
import BookList from './BookList';

function Bookcase(props) {
  return (
  <div>
   <ButtonAppBar/>
   {/* Display three shelves of books: "wantToRead", "currentlyReading", "read" */}
   <h2>Currently Reading</h2>
    <BookList books={props.books.filter(book=>book.shelf === "currentlyReading")}/>
    <h2>Want To Read</h2>
    <BookList books={props.books.filter(book=>book.shelf === "wantToRead")}/>
    <h2>Read</h2>
    <BookList books={props.books.filter(book=>book.shelf === "read")}/>
        </div>
    )
  }
export default Bookcase;