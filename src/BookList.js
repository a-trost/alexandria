/*  
    This takes a filter criteria and returns BookListItems that match it.
    Runs off of a grid based layout
*/
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import BookListItem from "./BookListItem";

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

function BookList(props) {
  const { classes } = props;
  return (
    <div className={classes.root + " book-list-container"}>
      <Grid container spacing={24}>
        {props.books &&
          props.books.map(book => {
            return (
              <Grid item xs={6} md={2} sm={4}>
                <BookListItem book={book} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

BookList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BookList);
