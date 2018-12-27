import React from 'react';

class Title extends React.Component {
    render(){
        return(
            <p class='title'>{this.props.title}</p>
        )
    }
}

export default Title;