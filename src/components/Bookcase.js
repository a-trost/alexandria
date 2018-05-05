/*  
    Holds the user's shelves in BookList components
*/
import React from 'react';
// My Components
import ButtonAppBar from './components/ButtonAppBar';
import BookDisplayGrid from './components/BookDisplayGrid';
import FloatingAddButton from './components/FloatingAddButton'
import Divider from 'material-ui/Divider';

function Bookcase(props) {
  return (
  <div>
   <ButtonAppBar userName={props.userName} />
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