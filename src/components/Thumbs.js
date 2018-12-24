import React from 'react';
import {FaThumbsUp } from 'react-icons/fa';

class Thumbs extends React.Component {
  state = { count: 0 }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <div class='row'>
          <p class='bio-paragraph'>Want to work with {this.props.name}?</p>
          <button class='button' onClick={this.increment}><div class='row'><div><FaThumbsUp size={5}/></div><div><p class='bio-paragraph'>Yes!</p></div></div></button>
        </div>
        <div>
          <p class='bio-paragraph'>{this.state.count} people have said Yes!</p>
        </div>
      </div>
    )
  }
}

export default Thumbs;