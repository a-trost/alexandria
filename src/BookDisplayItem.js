/* 
  This is the small book icon that will appear on shelves 
  and search results
*/
import React from "react";
import BookButton from "./BookButton";

function BookDisplayItem(props) {
  return (
    <div>
      <img
        src={props.book.imageLinks.thumbnail}
        alt={props.book.title}
        className="book-list-item"
      />
      <BookButton
        book={props.book}
        // To find the book's current shelf in the search feature
        bookShelf={props.bookShelf}
        handleShelfChange={props.handleShelfChange}
      />
      <div className="book-text">
      {props.book.title && <p className="book-title">{props.book.title}</p>}
        {props.book.authors && <p className="book-author">{props.book.authors.join(", ")}</p>}
      </div>
    </div>
  );
}

export default BookDisplayItem;
