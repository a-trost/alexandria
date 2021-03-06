/* 
  This is the small book image that will appear on shelves 
  and search results
*/
import React from "react";
import PropTypes from "prop-types";
import BookButton from "./BookButton";
import Chip from 'material-ui/Chip';
import missingcover from "../img/missingcover.svg";

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
          selectedIndex: 1,
          shelf: "Currently Reading"
        });
      } else if (
        currentShelf === "wantToRead" &&
        this.state.selectedIndex !== 2
      ) {
        this.setState({
          selectedIndex: 2,
          shelf: "Want to Read"
        });
      } else if (
        currentShelf === "read" &&
        this.state.selectedIndex !== 3
      ) {
        this.setState({
          selectedIndex: 3,
          shelf: "Read"
        });
      } else if (
        currentShelf === "none" &&
        this.state.selectedIndex !== 4
      ) {
        this.setState({
          selectedIndex: 4,
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
            {...this.props}
            handleButtonOpenClick = {this.handleButtonOpenClick}
            handleMenuItemClick = {this.handleMenuItemClick}
            handleClose = {this.handleClose}
            options = {options}
            anchorEl = {this.state.anchorEl}
            selectedIndex={this.state.selectedIndex}
            /> 
            {(this.state.shelf && this.props.search) && 
            <Chip 
            label = {this.state.shelf}
              className = "book-chip" />
            } 
            <div className = "book-text"> 
              {this.props.book.title && 
              <p className ="book-title"> {this.props.book.title} </p>
              } 
              {this.props.book.authors && 
              <p className = "book-author"> 
              {this.props.book.authors.join(", ")} 
              </p>} {this.props.book.averageRating && <p className="book-rating">{this.props.book.averageRating}({this.props.book.ratingsCount})</p>}
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
        