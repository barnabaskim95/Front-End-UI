import React from 'react';
import {FaThumbsUp } from 'react-icons/fa';
import ls from 'local-storage'

class Thumbs extends React.Component {
  state = { 
    count: ls.get(this.props.name) || 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
    ls.set(this.props.name,this.state.count)
  }
  render() {
    return (
      <div>
        <div class='row'>
          <p class='bio-paragraph'>Want to work with {this.props.name}?</p>
          <button class='button' onClick={this.increment}><div class='row'><div><FaThumbsUp size={5}/></div><div><p class='bio-paragraph'>Yes!</p></div></div></button>
        </div>
        <div>
          <p class='bio-paragraph'> {ls.get(this.props.name) || 0} people have said Yes!</p>
        </div>
      </div>
    )
  }
}

export default Thumbs;