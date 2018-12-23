import React from 'react';

class Title extends React.Component {
    render(){
        return(
            <h6 class='title'>{this.props.title}</h6>
        )
    }
}

export default Title;