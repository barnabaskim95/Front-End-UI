import React from 'react';

class Name extends React.Component {
    render(){
        return (
           <p class='name'>{this.props.name}</p>
        )
    }
}
export default Name;