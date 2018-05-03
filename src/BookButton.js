import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Menu, { MenuItem } from "material-ui/Menu";
import Button from "material-ui/Button";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

const options = [
  "Move to Shelf",
  "Currently Reading",
  "Want To Read",
  "Read",
  "None"
];

class BookButton extends React.Component {
  state = {
    anchorEl: null,
    selectedIndex: 1
  };
  componentDidUpdate(prevProps, prevState) {
    let currentShelf = this.props.book.shelf;
    // Change the selectedIndex to match the current shelf for the book
    if (currentShelf) {
      this.shelfMap(currentShelf)
    } else {
      // Check to make sure we've been passed the bookShelf prop through Search
      if (this.props.bookShelf) {
        try { 
          this.shelfMap(this.props.bookShelf.filter((book)=>book.id===this.props.book.id)[0].shelf)
        }
        catch(error) {
          this.shelfMap("none")
        }
      }
    }
  }
  button = undefined;

  shelfMap(currentShelf){
    if (
      currentShelf === "currentlyReading" && 
      this.state.selectedIndex !== 1
  ) {
      this.setState({ selectedIndex: 1 });
    } else if (
      currentShelf === "wantToRead" &&
      this.state.selectedIndex !== 2
    ) {
      this.setState({ selectedIndex: 2 });
    } else if ( 
      currentShelf === "read" && 
      this.state.selectedIndex !== 3
    ) {
      this.setState({ selectedIndex: 3 });
    } else if (
      currentShelf === "none" && 
      this.state.selectedIndex !== 4
    ) {
      this.setState({ selectedIndex: 4 });
    }
  }

  handleButtonOpenClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <Button
          variant="fab"
          color="primary"
          className="book-list-item-btn"
          aria-owns={anchorEl ? "simple-menu" : null}
          aria-haspopup="true"
          onClick={this.handleButtonOpenClick}
        >
          <ArrowDropDown style={{ fontSize: 36 }} />
        </Button>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              disabled={index === 0}
              selected={index === this.state.selectedIndex}
              onClick={() =>
                this.props.handleShelfChange(this.props.book, index, this.handleClose)
              }
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

BookButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BookButton);
