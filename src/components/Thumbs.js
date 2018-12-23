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
        <div class='rowC'>
          <div><p class='bio-paragraph'>Want to work with First Last? </p>
          </div>
          <div><button onClick={this.increment}><FaThumbsUp /></button>
          </div>
          <div><p class='bio-paragraph'>Yes!</p>
          </div>
        </div>
        <div>
          <p class='bio-paragraph'>{this.state.count} people have said Yes!</p>
        </div>
      </div>
    )
  }
}

export default Thumbs;