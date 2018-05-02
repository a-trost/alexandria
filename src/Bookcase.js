import React from 'react';
// My Components
import ButtonAppBar from './ButtonAppBar';
import FloatingAddButton from './FloatingAddButton'
import Divider from 'material-ui/Divider';

function Bookcase(props) {
  return (
  <div>
   <ButtonAppBar/>
   {/* Display three shelves of books: "wantToRead", "currentlyReading", "read" */}
   <h2>Currently Reading</h2>
    <BookDisplayGrid 
    books={props.books.filter(book=>book.shelf === "currentlyReading")}
    handleShelfChange={props.handleShelfChange}
    />
    <Divider />
    <h2>Want To Read</h2>
    <BookDisplayGrid 
    books={props.books.filter(book=>book.shelf === "wantToRead")}
    handleShelfChange={props.handleShelfChange}
    />
    <Divider />
    <h2>Read</h2>
    <BookDisplayGrid 
    books={props.books.filter(book=>book.shelf === "read")}
    handleShelfChange={props.handleShelfChange}
    />
    <FloatingAddButton />
        </div>
    )
  }
export default Bookcase;