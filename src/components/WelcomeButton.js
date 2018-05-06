/*  
    The Start Reading button for the welcome page.
*/
import React from "react";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

function RaisedButtons(props) {
  return (
    <div className="welcome-btn">
      <Button variant="raised" size="large" color="primary" >
        Start Reading!
      </Button>
    </div>
  );
}

export default withStyles(styles)(RaisedButtons);
