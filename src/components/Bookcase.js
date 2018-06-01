/*  
    Holds the user's shelves in BookList components
*/
import React from 'react';
import ButtonAppBar from './ButtonAppBar';
import BookDisplayGrid from './BookDisplayGrid';
import FloatingAddButton from './FloatingAddButton'
import Divider from 'material-ui/Divider';

export default (props) => {
    const currentlyReadingBookList = props.books.filter(book=>book.shelf === "currentlyReading");
    const wantToReadBookList = props.books.filter(book=>book.shelf === "wantToRead")
    const readBookList = props.books.filter(book=>book.shelf === "read")
  return (
  <div>
   <ButtonAppBar userName={props.userName} />
   <h2>Currently Reading <span className="book-shelf-count">({currentlyReadingBookList.length})</span></h2>
    <BookDisplayGrid 
    books={currentlyReadingBookList}
    handleShelfChange={props.handleShelfChange}
    />
    <Divider />
    <h2>Want To Read <span className="book-shelf-count">({wantToReadBookList.length})</span></h2>
    <BookDisplayGrid 
    books={wantToReadBookList}
    handleShelfChange={props.handleShelfChange}
    />
    <Divider />
    <h2>Read <span className="book-shelf-count">({readBookList.length})</span></h2>
    <BookDisplayGrid 
    books={readBookList}
    handleShelfChange={props.handleShelfChange}
    />
    <FloatingAddButton />
        </div>
    )
  }
