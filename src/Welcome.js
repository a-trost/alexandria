/* 
  This is shown to new users and will encourage them to add their name
  and pick some books to start with.
*/
import React, { Component } from 'react';
// My Components
import ButtonAppBar from './ButtonAppBar';



class Welcome extends Component {
  render() {
    return (
  <div>
<ButtonAppBar/>
        <p className="App-intro">
Welcome to Alexandria. 
Search above to find any books you'd like to add to your personal library.
        
        </p>

        </div>
    )
  }
};
export default Welcome;