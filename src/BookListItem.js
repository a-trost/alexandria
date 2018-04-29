/* 
  This is the small book icon that will appear on shelves 
  and search results
*/
import React from 'react';
import Button from 'material-ui/Button';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

function BookListItem(props) {
  return (
    <div>
      {props.book.title}
    <img src={props.book.imageLinks.thumbnail} alt={props.book.title} className="book-list-item" />
    <Button variant="fab" color="primary" className="book-list-item-btn" ><ArrowDropDown style={{ fontSize: 36 }} /></Button>
    </div>
  );
}

export default (BookListItem);