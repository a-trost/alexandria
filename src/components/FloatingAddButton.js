/*  
    The corner + button at the bottom right of the main screen.
*/
import React from "react";
import Button from "material-ui/Button";
import AddIcon from "@material-ui/icons/Add";
import { Link } from 'react-router-dom';

function FloatingAddButton(props) {
    return (
      <div className="add-book-btn">
      <Link to="/search">
        <Button
          variant="fab"
          color="secondary"
        >
          <AddIcon style={{ fontSize: 40 }} />
        </Button>
        </Link>
      </div>
    );
}

export default FloatingAddButton;