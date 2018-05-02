/*  
    This takes a filter criteria and returns BookDisplayItems that match it.
    Runs off of a grid based layout
*/
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import BookDisplayItem from "./BookDisplayItem";

const styles = theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: `${theme.spacing.unit * 3}px`
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    justify: "space-around"
  }
});

function BookDisplayGrid(props) {
  const { classes } = props;
  return (
    <div className={classes.root + " book-list-container"}>
      <Grid container spacing={24}>
      {props.books.length===0 &&  <span className="empty-shelf">There are no books on this shelf. Go add some!</span>}
        {props.books &&
          props.books.map((book,index) => {
            return (
              <Grid item xs={6} sm={4} md={2} key={index} >
                <BookDisplayItem
                key={book.id}
                  book={book}
                  // To find the book's current shelf in the search feature
                  bookShelf={props.bookShelf}
                  handleShelfChange={props.handleShelfChange}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

BookDisplayGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BookDisplayGrid);
