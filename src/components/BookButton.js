/*  
    A button on each book that allows the user to change the book's shelf
*/
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

function BookButton(props){
    return (
      <div className="book-button-root">
        <Button
          variant="fab"
          color="primary"
          className="book-list-item-btn"
          aria-owns={props.anchorEl ? "simple-menu" : null}
          aria-haspopup="true"
          onClick={props.handleButtonOpenClick}
        >
          <ArrowDropDown style={{ fontSize: 36 }} />
        </Button>
        <Menu
          id="lock-menu"
          anchorEl={props.anchorEl}
          open={Boolean(props.anchorEl)}
          onClose={props.handleClose}
        >
          {props.options.map((option, index) => (
            <MenuItem
              key={option}
              disabled={index === 0}
              selected={index === props.selectedIndex}
              onClick={() =>
                props.handleShelfChange(props.book, index, props.handleClose)
              }
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }


BookButton.defaultProps = {
  selectedIndex: 1  
}

BookButton.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedIndex: PropTypes.number,
};

export default withStyles(styles)(BookButton);
