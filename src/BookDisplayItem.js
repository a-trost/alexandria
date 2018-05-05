/* 
  This is the small book icon that will appear on shelves 
  and search results
*/
import React from "react";
import PropTypes from "prop-types";
import BookButton from "./BookButton";
import Chip from 'material-ui/Chip';
import missingcover from "./img/missingcover.svg";

const options = [
  "Move to Shelf",
  "Currently Reading",
  "Want To Read",
  "Read",
  "None"
];

class BookDisplayItem extends React.Component {
    state = {
      anchorEl: null,
      selectedIndex: 0,
      shelf: ""
    };
    componentDidMount() {
      this.checkShelf();
    }
    componentDidUpdate() {
      this.checkShelf();
    }

    checkShelf() {
      let currentShelf = this.props.book.shelf;
      // Change the selectedIndex to match the current shelf for the book
      if (currentShelf) {
        this.shelfMap(currentShelf)
      } else {
        // Check to make sure we've been passed the bookShelf prop through Search
        if (this.props.bookShelf) {
          try {
            this.shelfMap(this.props.bookShelf.filter((book) => book.id === this.props.book.id)[0].shelf)
          } catch (error) {
            this.shelfMap("none")
          }
        }
      }
    }

    shelfMap(currentShelf) {
      if (
        currentShelf === "currentlyReading" &&
        this.state.selectedIndex !== 1
      ) {
        this.setState({
          selectedIndex: 1
        });
        this.setState({
          shelf: "Currently Reading"
        });
      } else if (
        currentShelf === "wantToRead" &&
        this.state.selectedIndex !== 2
      ) {
        this.setState({
          selectedIndex: 2
        });
        this.setState({
          shelf: "Want to Read"
        });
      } else if (
        currentShelf === "read" &&
        this.state.selectedIndex !== 3
      ) {
        this.setState({
          selectedIndex: 3
        });
        this.setState({
          shelf: "Read"
        });
      } else if (
        currentShelf === "none" &&
        this.state.selectedIndex !== 4
      ) {
        this.setState({
          selectedIndex: 4
        });
        this.setState({
          shelf: false
        });
      }
    }

    // Button events
    handleButtonOpenClick = event => {
      this.setState({
        anchorEl: event.currentTarget
      });
    };

    handleMenuItemClick = (event, index) => {
      this.setState({
        selectedIndex: index,
        anchorEl: null
      });
    };

    handleClose = () => {
      this.setState({
        anchorEl: null
      });
    };

    render() {
  return (
        <div className="book-list-item"> 
          {this.props.book.imageLinks ?
      <img
              src = {this.props.book.imageLinks.thumbnail}
              alt = {this.props.book.title}
              className = "book-list-item-image" /> : 
              <img 
              src = {missingcover}
              alt = {this.props.book.title}
              className = "book-list-item-image" />
            } 
      <BookButton
            book = {this.props.book}
        // To find the book's current shelf in the search feature
            bookShelf = {this.props.bookShelf}
            handleButtonOpenClick = {this.handleButtonOpenClick}
            handleMenuItemClick = {this.handleMenuItemClick}
            handleClose = {this.handleClose}
            handleShelfChange = {this.props.handleShelfChange}
            options = {options}
            anchorEl = {this.state.anchorEl}
            selectedIndex={this.state.selectedIndex}
      />
            {(this.state.shelf && this.props.search) && 
            <Chip 
            label = {this.state.shelf}
              className = "book-chip" />
      <div className="book-text">
      {props.book.title && <p className="book-title">{props.book.title}</p>}
        {props.book.authors && <p className="book-author">{props.book.authors.join(", ")}</p>}
      </div>
    </div>
  );
}
        }
        BookDisplayItem.defaultProps = {
          selectedIndex: 0
        }

        BookButton.propTypes = {
          selectedIndex: PropTypes.number,
        };

export default BookDisplayItem;
