import React from "react";
import PropTypes from "prop-types";
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
  const { classes } = props;
  return (
    <div className="welcome-btn">
      <Button variant="raised" size="large" color="secondary" >
        Start Reading!
      </Button>
    </div>
  );
}
RaisedButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RaisedButtons);