/* 
  This is shown to new users and will allow them to add their name
  and pick some books to start with.
*/
import React, { Component } from "react";
import ButtonAppBar from "./ButtonAppBar";
import WelcomeButton from "./WelcomeButton";
import bookstack from "./BookStack.svg";
import { Link } from "react-router-dom";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";

class Welcome extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar userName={this.props.userName} />
        <h2>Welcome to Alexandria</h2>
        <p>
          Track books you've read, want to read, and what you're reading now.
        </p>
        <img className="welcome-image" src={bookstack} />

        <FormControl
          fullWidth
          aria-describedby="name-helper-text"
          className="name-input"
        >
          <InputLabel htmlFor="name-helper">Name</InputLabel>
          <Input
            id="name-helper"
            value={this.props.userName}
            onChange={this.props.handleNameChange}
          />
          <FormHelperText id="name-helper-text">
            Just your first name
          </FormHelperText>
          <Link to="/">
          <WelcomeButton />
        </Link>
        </FormControl>
<br/>
        <small>
          <a href="https://www.freepik.com/free-vector/book-illustrations-pack_759380.htm">
            Book Image Designed by Freepik
          </a>
        </small>
      </div>
    );
  }
}
export default Welcome;
