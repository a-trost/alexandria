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
          // onClick={this.handleButtonOpenClick}
        >
          <AddIcon style={{ fontSize: 40 }} />
        </Button>
        </Link>
      </div>
    );
}

export default FloatingAddButton;